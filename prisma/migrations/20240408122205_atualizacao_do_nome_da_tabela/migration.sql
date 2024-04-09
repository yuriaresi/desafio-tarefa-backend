/*
  Warnings:

  - You are about to drop the `tarefa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tarefa";

-- CreateTable
CREATE TABLE "tarefas" (
    "id" UUID NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(244),

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);
