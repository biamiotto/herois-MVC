import express from "express";
import dotenv from "dotenv";
import heroisRoutes from "../atividade-herois/src/routes/heroisRoutes.js";

const serverPort = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serviodr Funcionando 🚀");
});

app.use("/herois", heroisRoutes);

app.listen(serverPort, () => {
  console.log(`Serviodr Funcionando em http://localhost:${serverPort}`);
});
