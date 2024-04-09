"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaService = void 0;
const prisma_repository_1 = __importDefault(require("../database/prisma.repository"));
const Tarefa_model_1 = require("../models/Tarefa.model");
class TarefaService {
    async criar(data) {
        const ResultvalidarCampoTitulo = this.validarCampoTitulo(data);
        if (!ResultvalidarCampoTitulo.ok) {
            return ResultvalidarCampoTitulo;
        }
        const tarefa = new Tarefa_model_1.Tarefa(data.titulo, data.descricao);
        const result = await prisma_repository_1.default.tarefas.create({
            data: tarefa,
        });
        return {
            ok: true,
            message: "Tarefa criada com sucesso.",
            code: 201,
            data: result,
        };
    }
    validarCampoTitulo(data) {
        if (!data.titulo) {
            return {
                ok: false,
                message: "Insira uma tarefa",
                code: 400,
            };
        }
        if (data.titulo.length < 4) {
            return {
                ok: false,
                message: "Insira uma tarefa valida",
                code: 400,
            };
        }
        return {
            ok: true,
            code: 200,
            message: "validação realizada com sucesso",
        };
    }
}
exports.TarefaService = TarefaService;
