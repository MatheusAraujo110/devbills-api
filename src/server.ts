import express, { json } from "express";
import { routes } from "./routes";

const app = express()  // Inicialização do servidor.

app.use(json())
app.use(routes)  // Rotas.

app.listen(3333, () => console.log("O servidor está em execução na porta 3333 ✔"))  // Porta do servidor.