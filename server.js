const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Red Painting", price: 2000 },
    { id: 2, name: "Blue Sculpture", price: 3500 },
    { id: 3, name: "Green Vase", price: 1500 },
    { id: 4, name: "Yellow Tapestry", price: 2500 },
    { id: 5, name: "Purple Ceramic", price: 1800 }
    { id: 6, name: "Orange Print", price: 1200 }
    { id: 7, name: "Pink Glass", price: 2200 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000 g");
});

console.log("H");
console.log("I");

