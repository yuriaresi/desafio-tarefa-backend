"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasController = void 0;
const tarefas_services_1 = require("../services/tarefas.services");
const prisma_repository_1 = __importDefault(require("../database/prisma.repository"));
class TarefasController {
    async CriarTarefa(req, res) {
        try {
            const { titulo, descricao } = req.body;
            const tarefaService = new tarefas_services_1.TarefaService();
            const result = await tarefaService.criar({
                titulo,
                descricao,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            });
        }
    }
    async ListarTarefas(req, res) {
        try {
            const result = await prisma_repository_1.default.tarefas.findMany();
            return res.status(201).send({
                ok: true,
                message: "Todas as tarefas listadas com sucesso",
                data: result,
            });
        }
        catch (error) {
            return res.status(500).send(error.toString());
        }
    }
    async EditarTarefa(req, res) {
        try {
            const { id } = req.params;
            const { titulo, descricao } = req.body;
            if (!titulo || titulo.length < 4) {
                return res
                    .status(400)
                    .send({ ok: false, message: "Insira uma tarefa válida" });
            }
            const tarefa = await prisma_repository_1.default.tarefas.findUnique({ where: { id } });
            if (!tarefa) {
                return res
                    .status(404)
                    .send({ ok: false, message: "Tarefa não encontrada" });
            }
            const result = await prisma_repository_1.default.tarefas.update({
                where: { id },
                data: { titulo, descricao },
            });
            return res.status(200).send({
                ok: true,
                message: "tarefa atualizada com sucesso",
                data: result,
            });
        }
        catch (error) {
            return res.status(500).send(error.toString());
        }
    }
    async DeletarTarefa(req, res) {
        const { id } = req.params;
        const result = await prisma_repository_1.default.tarefas.delete({ where: { id } });
        return res.status(201).send({
            ok: true,
            message: "Tarefa Excluida com sucesso.",
        });
    }
}
exports.TarefasController = TarefasController;
