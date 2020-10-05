const { request, expect } = require("../config");
const { assertGetEmployeesProps } = require("../utils");
describe("Simulate get employees with token", function () {
  let token = null;

  before(function (done) {
    request
      .post("/simulate/token")
      .set("Content-Type", "application/json")
      .send({
        username: "admin",
        password: "admin",
      })
      .end(function (err, res) {
        // token = res.body.token
        token = res.text;
        done();
      });
  });

  it("get employees with token", async function () {
    const response = await request
      .get("/simulate/get/employees")
      .set("Authorization", `Bearer ${token}`);

    console.log(response.body);
    expect(response.status).to.be.eql(200);
    assertGetEmployeesProps(response.body);
  });
});
