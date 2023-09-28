import supertest from "supertest";
import app from "../src/app";

const server = supertest(app);

describe("GET /health", () => {
  it("Should response with OK!", async () => {
    const response = await server.get("/health");
    expect(response.text).toEqual("OK!");
    expect(response.status).toEqual(200);
  });
});
