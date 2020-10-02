const { request, expect } = require("../config");

describe("GET employees", function () {
  const token = "test123";

  it("get all employees", async function () {
    const response = await request
      .get("/employees")
      .set(`Authorization`, `Bearer ${token}`);

    expect(response.status).to.eql(200);

    const responseBody = response.body;
    const response_length = responseBody.length;
    for (let i = 0; i < response_length; i++) {
      expect(responseBody[i]).to.have.property("id");
      expect(responseBody[i]).to.have.property("firstName");
      expect(responseBody[i]).to.have.property("lastName");
    }
  });
});
