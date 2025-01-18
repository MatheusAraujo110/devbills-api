import { Router } from "express"
import packageJson from "../../package.json"

export const baseRoutes = Router()  // Rotas base.

baseRoutes.get("/", (_, res) => {  // Rota raiz.
    const { name, version, description, author } = packageJson  // Dados do pacote.

    res.status(200).json({ name, version, description, author })  // Resposta da rota raiz.
})