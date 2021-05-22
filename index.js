
const port = process.env.PORT || 3000;
const API_URL = "http://api.icndb.com/jokes/random";
const express = require("express");
const app = express();
const axios = require('axios');

app.get("/", (req, res) => {
  res.send("Express API server is up and running! Testing changes.");
})

app.get("/chuck", (req, res) => {

  axios.get(API_URL)
    .then(urlResponse => {
      console.log(urlResponse);
      res.send(urlResponse.data.value.joke);
    })
    .catch(err => {
      console.log(err);
      res.send("Error!");
    });

})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})