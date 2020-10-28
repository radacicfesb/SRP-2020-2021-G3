const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
//const { login } = require("./routes/login.schemas");
const user = require("./routes/user");
<<<<<<< HEAD
<<<<<<< HEAD
const medicalTest = require("./routes/medical-test");
=======
const login = require("./routes/login");
>>>>>>> 6519fcb... Implement initial login logic
=======
const login = require("./routes/login");
=======
const medicalTest = require("./routes/medical-test");
>>>>>>> 470cd0f... Add initial routes for medicalTest api
>>>>>>> d2a46b4... Add initial routes for medicalTest api

module.exports = () => {
  hello(router);
  user(router);
<<<<<<< HEAD
<<<<<<< HEAD
  medicalTest(router);
=======
  login(router)
>>>>>>> 6519fcb... Implement initial login logic
=======
  login(router)
=======
  medicalTest(router);
>>>>>>> 470cd0f... Add initial routes for medicalTest api
>>>>>>> d2a46b4... Add initial routes for medicalTest api

  return router;
};
