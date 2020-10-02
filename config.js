const request = require("supertest")(
  "https://qa-automation-practice.herokuapp.com/api/v1"
);
const expect = require("chai").expect;
const faker = require("faker");

module.exports = {
  faker,
  request,
  expect,
};
