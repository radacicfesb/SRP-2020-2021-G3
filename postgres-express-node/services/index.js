const winston = require("winston");
const UserService = require("./user.service");
<<<<<<< HEAD
const MedicalTestService = require("./medical-test.service");
const { User, MedicalTest } = require("../models");
=======
const LoginService = require("./login.service");
const { User } = require("../models");
>>>>>>> 6519fcb2a1facee420d0be0b62cc399a6cd5ba03

const logger = winston.loggers.get("logger");

exports.userServiceInstance = new UserService({ logger, userModel: User });
<<<<<<< HEAD
exports.medicalTestServiceInstance = new MedicalTestService({
  logger,
  testModel: MedicalTest,
});
=======
exports.loginServiceInstance = new LoginService({ logger, userModel: User });

>>>>>>> 6519fcb2a1facee420d0be0b62cc399a6cd5ba03
