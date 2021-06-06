import express from "express";
import { users } from "./mockData.js";

const app = express();
const port = 3000;

app.get("/users", (_req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Cool app listening at http://localhost:${port}`);
});
