const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(bodyParser.json());

const mainCharacters = ["Redmund", "Baldur", "Altuin", "Silliris"];
//

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected successfully");
});

app.listen(3000);

// app.get("/main-characters/:index", (req, res) => {
//   const { index } = req.params;
//   return res.json(mainCharacters[index]);
// });

// app.get("/main-characters", (req, res) => {
//   return res.json(mainCharacters);
// });

// app.post("/main-characters", (req, res) => {
//   const { name } = req.body;
//   mainCharacters.push(name);

//   return res.json(mainCharacters);
// });

// app.put("/main-characters/:index", (req, res) => {
//   const { index } = req.params;
//   const { name } = req.body;

//   mainCharacters[index] = name;
//   return res.json(mainCharacters);
// });

// app.delete("/main-characters", (req, res) => {
//   const { index } = req.params;

//   mainCharacters.splice(index, 1);
//   return res.json({ message: "O personagem foi deletado" });
// });
