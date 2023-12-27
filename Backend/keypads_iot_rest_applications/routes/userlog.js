const express = require("express");

const router = express.Router();

const userlogController = require("../controllers/userlog");

router.post("/api/userlog", (req, res) => {
  if (!req.body.userid || !req.body.machineid) {
    res.json({ error: true });
  } else {
    userlogController.createNewuserlog(
      req.body.userid,
      req.body.machineid,
      function (result) {
        res.json(result);
      }
    );
  }
});

module.exports = router;
