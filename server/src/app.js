import express from "express";
import { users } from "./mockData.js";
import cors from "cors";

const app = express();
const port = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

let count = 0

app.get("/users", (_req, res) => {
  res.send(users);
});

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.post("/increment", (req, res) => {
  const increment = Number(req.body?.count)
  if (Number.isInteger(increment)) {
    count += increment
    res.send({ success: true, count })
  }
  res.status(400).send({ success: false, count })
})

app.listen(port, () => {
  console.log(`Cool app listening at http://localhost:${port}`);
});
