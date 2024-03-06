const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const notifyCtl = require("../controllers/notification.control");
const { validateParamsId } = require("../services/validate.service");

router.route("/").get(notifyCtl.getAllNotifications);

router.route("/:id").delete(authorizeUser,validateParamsId, notifyCtl.deleteNotification);

module.exports = router;
