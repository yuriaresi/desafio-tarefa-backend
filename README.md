# API de Tarefas

## Esta é uma API simples para gerenciar tarefas.

- Crie uma tarefa
- Liste todas as tarefas
- Edite uma tarefa
- Delete uma tarefa

## Features

- Crie tarefas com título e descrição
- Liste todas as tarefas cadastradas
- Edite os detalhes de uma tarefa
- Delete tarefas existentes

## Tecnologias

A API de Tarefas utiliza as seguintes tecnologias:

- **Node.js** - Para o backend da aplicação
- **Express** - Framework web para Node.js
- **PostgreSQL** - Banco de dados relacional para armazenar as tarefas

## Instalação e Uso

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/api-tarefas.git
```

2. Instale as dependências:

```bash
cd api-tarefas
npm install
```

3. Configure o banco de dados PostgreSQL:

   Certifique-se de ter um banco de dados PostgreSQL configurado e pronto para uso.
   Crie um arquivo `.env` na raiz do projeto com a seguinte variável de ambiente:

```bash
DATABASE_URL=postgresql://seu_usuario_do_banco_de_dados:sua_senha_do_banco_de_dados@host_do_banco_de_dados:porta_do_banco_de_dados/nome_do_banco_de_dados
```

4. Execute o seguinte comando para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor na porta 3333.

## Rotas

### Criar Tarefa

- URL: `/tarefas`
- Método: `POST`
- Corpo da requisição:

```json
{
  "titulo": "Título da Tarefa",
  "descricao": "Descrição da Tarefa"
}
```

- Resposta de Sucesso:
  - Código: `201` (Created)
  - Corpo da Resposta:

```json
{
  "id": "identificador-da-tarefa",
  "titulo": "Título da Tarefa",
  "descricao": "Descrição da Tarefa"
}
```

### Listar Tarefas

- URL: `/tarefas`
- Método: `GET`
- Resposta de Sucesso:
  - Código: `200` (OK)
  - Corpo da Resposta: Array de objetos contendo as informações das tarefas.

### Editar Tarefa

- URL: `/:id`
- Método: `PUT`
- Parâmetros da URL: `id` (ID da tarefa a ser editada)
- Corpo da requisição:

```json
{
  "titulo": "Novo Título",
  "descricao": "Nova Descrição"
}
```

- Resposta de Sucesso:
  - Código: `200` (OK)
  - Corpo da Resposta:

```json
{
  "id": "identificador-da-tarefa",
  "titulo": "Novo Título",
  "descricao": "Nova Descrição"
}
```

### Deletar Tarefa

- URL: `/:id`
- Método: `DELETE`
- Parâmetros da URL: `id` (ID da tarefa a ser deletada)
- Resposta de Sucesso:
  - Código: `200` (OK)
  - Corpo da Resposta:

```json
{
  "mensagem": "Tarefa deletada com sucesso"
}
```

## Contribuindo

Sinta-se à vontade para abrir uma issue ou enviar um pull request para melhorar este projeto.
