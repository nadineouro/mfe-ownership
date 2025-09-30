import express from "express";
import { product } from "./product.js";
import { shippingOptions, storePickups } from "./shipping.js";

const app = express();
const port = 3000;

// Middleware para CORS
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/product", (_, res) => {
  res.json(product);
});

app.get("/shipping", (_, res) => {
  res.json({ options: shippingOptions, pickups: storePickups });
});

app.listen(port, () => {
  console.log(`API mock rodando em http://localhost:${port}`);
});
