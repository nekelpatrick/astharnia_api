const express = require("express");
const server = express();
server.use(express.json());

const mainCharacters = ["Redmund", "Baldur", "Altuin", "Silliris"];

server.get("/mainCharacters/:index", (req, res) => {
  const { index } = req.params;
  return res.json(mainCharacters[index]);
});

server.get("/mainCharacters", (req, res) => {
  return res.json(mainCharacters);
});

server.post("/mainCharacters", (req, res) => {
  const { name } = req.body;
  mainCharacters.push(name);

  return res.json(mainCharacters);
});

server.put("/mainCharacters/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  mainCharacters[index] = name;
  return res.json(mainCharacters);
});

server.delete("/mainCharacters", (req, res) => {
  const { index } = req.params;

  mainCharacters.splice(index, 1);
  return res.json({ message: "O personagem foi deletado" });
});

server.listen(3000);
