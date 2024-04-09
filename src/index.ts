import express from "express";
import cors from "cors";
import { TarefasController } from "./controllers/tarefas.controller";

const app = express();
app.use(express.json());
app.use(cors());

const tarefasController = new TarefasController();

app.post("/tarefas", tarefasController.CriarTarefa);

app.get("/tarefas", tarefasController.ListarTarefas);

app.put("/:id", tarefasController.EditarTarefa);

app.delete("/:id", tarefasController.DeletarTarefa);

app.listen(3333, () => {
  console.log("A API está rodando!- http://localhost:3333");
});
