const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
//const { login } = require("./routes/login.schemas");
const user = require("./routes/user");
<<<<<<< HEAD
const medicalTest = require("./routes/medical-test");
=======
const login = require("./routes/login");
>>>>>>> 6519fcb... Implement initial login logic

module.exports = () => {
  hello(router);
  user(router);
<<<<<<< HEAD
  medicalTest(router);
=======
  login(router)
>>>>>>> 6519fcb... Implement initial login logic

  return router;
};
