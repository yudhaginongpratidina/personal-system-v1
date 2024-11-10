import request from "supertest";
import { prismaClient } from "../../utils/prisma.js";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = `http://${process.env.APP_HOST}:${process.env.APP_PORT}`;

class AuthTest {

    static async delete() {
        await prismaClient.account.deleteMany({where: {}})
    }

    static async create() {
        await prismaClient.account.create({
            data: {
                username: "user1",
                email: "user1@test.com",
                password: "password1",
                role: "GUEST"
            }
        });
    }
}

describe("POST /register", () => {

    beforeEach(async () => {
        await AuthTest.create();
    })

    afterEach(async () => {
        await AuthTest.delete();
    })

    it("should reject register, because username already exist", async () => {
        const response = await request(BASE_URL).post("/register").send({
            username: "user1",
            email: "user1@test.com",
            password: "password1",
            confirmPassword: "password1",
            role: "GUEST"
        });

        expect(response.status).toBe(409);
        expect(response.body.message).toBe("Username already exist");
    })

    it("should reject register, because email already exist", async () => {
        const response = await request(BASE_URL).post("/register").send({
            username: "user2",
            email: "user1@test.com",
            password: "password2",
            confirmPassword: "password2",
            role: "GUEST"
        });

        expect(response.status).toBe(409);
        expect(response.body.message).toBe("Email already exist");
    })

    it("should reject register, because password not match", async () => {
        const response = await request(BASE_URL).post("/register").send({
            username: "user2",
            email: "user2@test.com",
            password: "password2",
            confirmPassword: "password3",
            role: "GUEST"
        });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Password not match");
    })

    it("should be able to register", async () => {
        const response = await request(BASE_URL).post("/register").send({
            username: "user3",
            email: "user3@test.com",
            password: "password3",
            confirmPassword: "password3"
        });

        expect(response.status).toBe(201);
        expect(response.body.data).toBeDefined();
        expect(response.body.message).toBe("Created");
    })

});