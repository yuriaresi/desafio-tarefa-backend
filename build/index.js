"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tarefas_controller_1 = require("./controllers/tarefas.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const tarefasController = new tarefas_controller_1.TarefasController();
app.post("/tarefas", tarefasController.CriarTarefa);
app.get("/", tarefasController.ListarTarefas);
app.put("/:id", tarefasController.EditarTarefa);
app.delete("/:id", tarefasController.DeletarTarefa);
app.listen(3333, () => {
    console.log("A API está rodando!- http://localhost:3333");
});
