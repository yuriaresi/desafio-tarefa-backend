-- CreateTable
CREATE TABLE "tarefa" (
    "id" UUID NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(244) NOT NULL,

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);
