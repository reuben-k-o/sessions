const { Router } = require("express");

router = Router();

router.get("/", (req, res, next) => {
  res.send("Welcome Home!");
});

module.exports = router;
