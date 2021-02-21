const multer = require('multer')
const path = require("path");

const storage = multer.diskStorage({
   destination: function(req, file, callback) {
      callback(null, path.join(__dirname, "../images/"));
   },
   filename: function (req, file, callback ) {
      callback(null, file.originalname);
   },
});

module.exports = multer({
   storage
});