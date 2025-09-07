const express = require("express");
const router = express.Router();
const {
  sendContactEmail,
  sendIdeaEmail,
} = require("../controllers/contact");

router.post("/", sendContactEmail);
router.post("/submit-idea", sendIdeaEmail);

module.exports = router;
