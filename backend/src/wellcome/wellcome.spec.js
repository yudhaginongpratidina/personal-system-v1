import request from "supertest";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = `http://${process.env.APP_HOST}:${process.env.APP_PORT}`;

describe("GET /", () => {
    it("should be able to get /", async () => {
        const response = await request(BASE_URL).get("/");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Ok");
    })
});