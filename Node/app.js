const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const explorers = [];

app.get("/explorers", (request, response) => {

  return response.json(explorers);
});

app.post("/explorers", (request, response) => {
  const { id, name, stacks } = request.body;

  const explorer = { id , name, stacks}

  explorers.push(explorer);

  return response.json(explorer);

});

app.put("/explorers/:id", (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const explorerIndex = explorers.findIndex(explorer => explorer.id === id);

  if (explorerIndex < 0){
    return response.status(400).json({ error: 'Explorer not found.' })
  }

  const explorer = {
    id, 
    name: name,
    stacks: explorers[explorerIndex].stacks
  }

  explorers[explorerIndex] = explorer;

  return response.json(explorer);
});

app.delete("/explorers/:id", (request, response) => {
  const { id } = request.params;

  const explorerIndex = explorers.findIndex(explorer => explorer.id === id);

  if (explorerIndex < 0){
    return response.status(400).json({ error: 'Explorer not found.' })
  }
  
  explorers.splice(explorerIndex, 1);

  return response.status(204).send();
});

app.post("/explorers/:id/stacks", (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const explorerIndex = explorers.findIndex(explorer => explorer.id === id);

  if (explorerIndex < 0){
    return response.status(400).json({ error: 'explorer not found.' })
  }

  const currentStacks = explorers[explorerIndex].stacks.push(name);

  return response.json(explorers[explorerIndex].stacks);
});

module.exports = app;
