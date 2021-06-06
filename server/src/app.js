import express from "express";
import { users } from "./mockData.js";
import cors from "cors";

const app = express();
const port = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/users", (_req, res) => {
  res.send(users);
});

app.get("/", (_req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Cool app listening at http://localhost:${port}`);
});
