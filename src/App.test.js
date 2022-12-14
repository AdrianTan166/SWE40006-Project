import { render, screen } from '@testing-library/react';
import App from './App';

const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/home")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello world");
    })
})