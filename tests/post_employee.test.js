const { faker, request, expect } = require("../config");

describe("post endpoint suite", function () {
  it("create employee", async function () {
    const response = await request
      .post("/employees")
      .set("Content-Type", "application/json")
      .send({
        firstName: "Razvan",
        lastName: "Luca",
        email: faker.internet.email(),
      });

    //console.log(response);
    expect(response.status).to.be.eql(201);
  });
});
