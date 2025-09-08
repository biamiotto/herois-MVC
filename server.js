import express from "express";

const serverPort = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Serviodr Funcionando 🚀");
})

app.listen(serverPort, () => {
    console.log(`Serviodr Funcionando em http://localhost:${serverPort}`)
});