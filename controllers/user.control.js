const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const userCtl = {
  getUserData: asyncHandler(async (req, res) => {
    let data = await User.findById(req.user._id).select("-password");
    res.send(data);
  }),
  updateUser: asyncHandler(async (req, res) => {
    const user = await User.findById(req.body._id);

    if (req.body.newPassword) {
      let matched = await user.comparePassword(req.body.password);
      if (!matched) {
        return res.status(400).send({
          message: "Wrong Old password !!",
        });
      }

      user.password = req.body.newPassword
      await user.save()
      return res.send()
      
    } else {
      delete req.body.password;
    }
    let newData = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(newData);
  }),
  changePassword: asyncHandler(async (req, res) => {
    let user = await User.findById(req.user._id);

    let matched = await user.comparePassword(req.body.oldPassword);
    if (!matched) {
      return res.status(400).send({
        message: "Wrong Old password !!",
      });
    }

    user.password = req.body.newPassword;
    await user.save();
    res.send({ message: "Password changed !!" });
  }),
};

module.exports = userCtl;
