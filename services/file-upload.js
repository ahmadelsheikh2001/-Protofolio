const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storeStorage = (destinationDir) =>
  multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./uploads/${destinationDir}`);
    },
    filename: function (req, file, cb) {
      if (file) {
        let fileExt = path.extname(file.originalname);
        cb(null, uuidv4() + fileExt);
      } else {
        cb(null, false);
      }
    },
  });

const imageUpload = (destinationDir) =>
  multer({
    storage: storeStorage(destinationDir),
    fileFilter: function (req, file, cb) {
      const fileTypes = /jpeg|jpg|png|gif|svg/;
      let validFile = fileTypes.test(path.extname(file.originalname));

      if (file.mimetype.startsWith("image") && validFile) {
        cb(null, true);
      } else {
        cb("Unsupported file format ", false);
      }
    },
    // limits: { fileSize: 1024 * 1024 * 5 },
  });

const fileUpload = (destinationDir) =>
  multer({
    storage: storeStorage(destinationDir),
    fileFilter: function (req, file, cb) {
      const allowedFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/svg+xml",
      ];

      if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(
          "Unsupported file format. Only PDF and Word documents are allowed.",
          false
        );
      }
    },
    // limits: { fileSize: 1024 * 1024 * 10 },
  });

module.exports = {
  imageUpload,
  fileUpload,
};
