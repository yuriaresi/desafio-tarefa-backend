import { CriarTarefaDTO } from "../contracts/tarefas.contract";
import { Result } from "../contracts/result.contract";
import repository from "../database/prisma.repository";
import { Tarefa } from "../models/Tarefa.model";

export class TarefaService {
  public async criar(data: CriarTarefaDTO): Promise<Result> {
    const ResultvalidarCampoTitulo = this.validarCampoTitulo(data);
    if (!ResultvalidarCampoTitulo.ok) {
      return ResultvalidarCampoTitulo;
    }

    const tarefa = new Tarefa(data.titulo, data.descricao);

    if (tarefa.titulo.length > 50) {
      return {
        ok: false,
        message: "Titulo da tarefa precisa ter no maximo 50 caracteres",
        code: 400,
      };
    }

    const result = await repository.tarefas.create({
      data: tarefa,
    });

    return {
      ok: true,
      message: "Tarefa criada com sucesso.",
      code: 201,
      data: result,
    };
  }

  private validarCampoTitulo(data: CriarTarefaDTO): Result {
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
