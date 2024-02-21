// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const phonesData = require("./phones.json");

const app = express();

app.use(express.json());

app.get("/phones/:id", async (req, res) => {
  try {
    const phoneDataId = req.params.id;
    const response = await phonesData.findById(phoneDataId);
    console.log("found the phone data", response);
    res.json({
      status: 200,
      msg: "Phone found",
      data: response,
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 400,
      msg: "Something is wrong with the phone data",
    });
  }
});

module.exports = app;
