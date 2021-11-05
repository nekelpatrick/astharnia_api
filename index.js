const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require.apply("mongoose");

const mainCharacters = ["Redmund", "Baldur", "Altuin", "Silliris"];
//
app.get("/main-characters/:index", (req, res) => {
  const { index } = req.params;
  return res.json(mainCharacters[index]);
});

app.get("/main-characters", (req, res) => {
  return res.json(mainCharacters);
});

app.post("/main-characters", (req, res) => {
  const { name } = req.body;
  mainCharacters.push(name);

  return res.json(mainCharacters);
});

app.put("/main-characters/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  mainCharacters[index] = name;
  return res.json(mainCharacters);
});

app.delete("/main-characters", (req, res) => {
  const { index } = req.params;

  mainCharacters.splice(index, 1);
  return res.json({ message: "O personagem foi deletado" });
});

mongoose.connect("", () => {
  console.log("Connected successfully");
});

app.listen(3000);
