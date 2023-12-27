const express = require("express");

const router = express.Router();

const userlogController = require("../controllers/userlog");

router.post("/api/userlog", (req, res) => {
  const { userid, machineid } = req.body;
    console.log("userid and machineid is:");
    console.log(req.body);
    console.log(userid);
    console.log(machineid);
  if (!userid || !machineid) {
    res.json({ error: true });
  } else {
    userlogController.createNewuserlog(
      userid,
      machineid,
      function (result) {
        res.json(result);
      }
    );
  }
});

router.get("/api/user", (req, res) => {
  userlogController.getAlluserlog(function (result) {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
