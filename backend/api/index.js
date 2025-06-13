const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for items
let items = [];
let nextId = 1;

// Routes
app.get("/", (req, res) => res.send("Express on Vercel"));

// CRUD endpoints for items
app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  const { name, description } = req.body;
  const newItem = {
    id: nextId++,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const itemIndex = items.findIndex(item => item.id === parseInt(id));
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items[itemIndex] = {
    ...items[itemIndex],
    name,
    description
  };
  
  res.json(items[itemIndex]);
});

app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(item => item.id === parseInt(id));
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items = items.filter(item => item.id !== parseInt(id));
  res.status(204).send();
});

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
}

module.exports = app;