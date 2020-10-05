const { request, expect } = require("../config");

describe("POST Token suite", function () {
  it("POST generate token", async function () {
    const response = await request
      .post("/simulate/token")
      .set("Content-Type", "application/json")
      .send({
        username: "admin",
        password: "admin",
      });
    expect(response.status).to.be.eql(200);
  });
});
