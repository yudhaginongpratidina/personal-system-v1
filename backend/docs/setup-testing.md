# SETUP TESTING

## INSTALL DEPENDENCIES

```bash
npm i jest supertest @babel/plugin-transform-runtime @babel/preset-env babel-jest
```

## COPY IN PACKAGE JSON

```json
{
    ......
    "scripts": {
        "dev": "nodemon index.js",
        "start": "node index.js",
        "test": "jest"
    },
    "jest": {
        "transform": {
            "^.+\\.[t|j]sx?$": "babel-jest"
        },
        "verbose": true,
        "collectCoverage": false,
        "coverageThreshold": {
            "global": {
                "branches": 100,
                "functions": 100,
                "lines": 100,
                "statements": 100
            }
        },
        "collectCoverageFrom": [
            "!**/node_modules/**",
            "!index.js"
        ]
    },
    ......
}
```

## CREATE babel.config.json

```json
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ]
    ]
}
```

## EXAMPLE TEST

```js
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
```

```js
import request from "supertest";
import { prismaClient } from "../../utils/prisma.js";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = `http://${process.env.APP_HOST}:${process.env.APP_PORT}`;

class MessageTest {

    static async delete() {
        await prismaClient.message.deleteMany({where: {}})
    }

    static async create() {
        await prismaClient.message.create({
            data: {
                fullName: "user test",
                email: "user@test.com",
                subject: "testing api message",
                message: "test send message to api",
            }
        });
    }

    static async get() {
        const message = await prismaClient.message.findFirst({
            where: {
                fullName: "user test"
            }
        });

        if (!message) {
            throw new Error(`Message with fullName 'user test' not found`);
        }

        return message;
    }
}

describe("GET /messages", () => {

    beforeEach(async () => {
        await MessageTest.create();
    })


    afterEach(async () => {
        await MessageTest.delete();
    });


    it("should be able to get all messages", async () => {
        const response = await request(baseUrl).get("/messages");
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(response.body.data.length).toBe(1);
    })
});

describe("GET /messages/:id", () => {

    beforeEach(async () => {
        await MessageTest.create();
    });


    afterEach(async () => {
        await MessageTest.delete();
    });


    it("should be able to get message by id", async () => {
        const message = await MessageTest.get();
        const response = await request(baseUrl).get(`/messages/${message.id}`);
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(response.body.data.id).toBe(message.id);
    })
})

describe("POST /messages", () => {

    beforeEach(async () => {
        await MessageTest.create();
    });

    afterEach(async () => {
        await MessageTest.delete();
    });


    it("should reject create a message if request is invalid", async () => {
        const response = await request(baseUrl).post("/messages").send({});
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to create a message", async () => {
        const response = await request(baseUrl).post("/messages").send({
            fullName: "user1 test",
            email: "user1@test.com",
            subject: "testing api message",
            message: "test send message to api",
        });

        expect(response.status).toBe(201);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.fullName).toBe("user1 test");
        expect(response.body.data.email).toBe("user1@test.com");
        expect(response.body.data.subject).toBe("testing api message");
        expect(response.body.data.message).toBe("test send message to api");
    });

});

describe("PATCH /messages/:id", () => {

    beforeEach(async () => {
        await MessageTest.create();
    });

    afterEach(async () => {
        await MessageTest.delete();
    });


    it("should reject update a message if request id is invalid", async () => {
        const response = await request(baseUrl).patch("/messages/0");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to update status isRead a message", async () => {
        const message = await MessageTest.get();
        const response = await request(baseUrl).patch(`/messages/${message.id}`).send({
            isRead: true
        });
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(message.id);
        expect(response.body.data.isRead).toBe(true);
    })
})

describe("DELETE /messages/:id", () => {

    beforeEach(async () => {
        await MessageTest.create();
    });

    afterEach(async () => {
        await MessageTest.delete();
    });

    it("should reject delete a message if request id is invalid", async () => {
        const response = await request(baseUrl).delete("/messages/0");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to delete a message", async () => {
        const message = await MessageTest.get();
        const response = await request(baseUrl).delete(`/messages/${message.id}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Delete Message By Id");
        expect(response.body.data.id).toBe(message.id);
    })

})
```

## RUN TEST

```bash
npm run test
```