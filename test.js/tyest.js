const request = require("supertest");
const app = require("../app");

describe("Authentication Tests", () => {

    test("Login with valid credentials", async () => {
        const response = await request(app)
            .post("/login")
            .send({
                username: "testuser",
                password: "123456"
            });

        expect(response.statusCode).toBe(302);
    });

    test("Login with invalid credentials", async () => {
        const response = await request(app)
            .post("/login")
            .send({
                username: "testuser",
                password: "wrongpassword"
            });

        expect(response.statusCode).toBe(401);
    });

});