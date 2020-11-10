const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
//const { login } = require("./routes/login.schemas");
const user = require("./routes/user");
const login = require("./routes/login");

const medicalTest = require("./routes/medical-test");

const login = require("./routes/login");

const login = require("./routes/login");

const medicalTest = require("./routes/medical-test");

const medicalTest = require("./routes/medical-test");

const login = require("./routes/login");


module.exports = () => {
  hello(router);
  user(router);
  login(router)

  medicalTest(router);

  login(router)
c
  login(router)

  medicalTest(router);

  medicalTest(router);

  login(router)

  return router;
};
