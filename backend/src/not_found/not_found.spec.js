import request from "supertest";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = `http://${process.env.APP_HOST}:${process.env.APP_PORT}`;

describe("Not Found", () => {
    it("should be able to get something page, but not found", async () => {
        const response = await request(BASE_URL).get("/something");
        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Not Found");
    })
});