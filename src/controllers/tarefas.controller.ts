import { Request, Response } from "express";
import { TarefaService } from "../services/tarefas.services";
import repository from "../database/prisma.repository";

export class TarefasController {
  public async CriarTarefa(req: Request, res: Response) {
    try {
      const { titulo, descricao } = req.body;

      const tarefaService = new TarefaService();
      const result = await tarefaService.criar({
        titulo,
        descricao,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async ListarTarefas(req: Request, res: Response) {
    try {
      const result = await repository.tarefas.findMany();

      return res.status(201).send({
        ok: true,
        message: "Todas as tarefas listadas com sucesso",
        data: result,
      });
    } catch (error: any) {
      return res.status(500).send(error.toString());
    }
  }

  public async EditarTarefa(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { titulo, descricao } = req.body;

      if (!titulo || titulo.length < 4) {
        return res
          .status(400)
          .send({ ok: false, message: "Insira uma tarefa válida" });
      }

      const tarefa = await repository.tarefas.findUnique({ where: { id } });

      if (!tarefa) {
        return res
          .status(404)
          .send({ ok: false, message: "Tarefa não encontrada" });
      }

      const result = await repository.tarefas.update({
        where: { id },
        data: { titulo, descricao },
      });

      return res.status(200).send({
        ok: true,
        message: "tarefa atualizada com sucesso",
        data: result,
      });
    } catch (error: any) {
      return res.status(500).send(error.toString());
    }
  }

  public async DeletarTarefa(req: Request, res: Response) {
    const { id } = req.params;

    const result = await repository.tarefas.delete({ where: { id } });

    return res.status(201).send({
      ok: true,
      message: "Tarefa Excluida com sucesso.",
    });
  }
}
