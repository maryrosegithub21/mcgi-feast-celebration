// ========== Module IMPORTS ========== //
const express = require("express");
const logInRouter = express.Router();
const getLogInController = require("../controllers/loginController");

// MEMBER AND GUESTS SIGN UP
logInRouter.post("/api/login", getLogInController.getLoginMember);
logInRouter.post("/api/login-guests", getLogInController.getLoginNonMember);

// MEMBER AND GUESTS SIGN UP
logInRouter.post("/api/signup-members", getLogInController.getSignUpMember);
logInRouter.post("/api/signup-guests", getLogInController.getSignUpNonMember);



module.exports = logInRouter;