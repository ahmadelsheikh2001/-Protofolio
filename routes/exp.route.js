const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const expCtl = require("../controllers/exp.control");
const { validateParamsId, validate } = require("../services/validate.service");

router
  .route("/")
  .post(authorizeUser, expCtl.addexp)
  .get(expCtl.getExp);

router
  .route("/:id")
  .patch(authorizeUser, validateParamsId, expCtl.updateexp)
  .delete(authorizeUser, expCtl.deleteexp);

module.exports = router;
