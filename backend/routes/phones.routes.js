const router = require("express").Router();
const phonesData = require("..data/phones.json");
app.get("/phones", (req, res) => {
  try {
    res.json(phonesData);
  } catch (error) {
    res.status(500).json({ error: "Server error with the phone data" });
  }
});

module.exports = router;
