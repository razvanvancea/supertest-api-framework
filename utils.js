const { request, expect } = require("./config");

const assertGetEmployeesProps = (employeesList) => {
  employeesList.forEach((item) => {
    expect(item).to.have.property("id");
    expect(item).to.have.property("firstName");
    expect(item).to.have.property("lastName");
  });
};

module.exports = {
  assertGetEmployeesProps,
};
