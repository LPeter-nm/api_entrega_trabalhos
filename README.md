
# Entrega de trabalhos

Sistema para que professores acompanhem a entrega
de trabalhos pelos alunos e mantenham um registro das notas.

  [![My Skills](https://skillicons.dev/icons?i=typescript,adonis,docker)](https://skillicons.dev)

## Rotas de Sessões

- **POST /session** — `SessionsController.store`
- **DELETE /session** — `SessionsController.destroy` (middleware: `auth`)

## Rotas de Trabalho

- **GET /trabalho/:id** — `TrabalhosController.show`
- **POST /trabalho** — `TrabalhosController.store`
- **DELETE /trabalho/:id** — `TrabalhosController.destroy`
- **GET /trabalho** — `TrabalhosController.index` (middleware: `auth`)
- **PUT /trabalho/:id** — `TrabalhosController.update` (middleware: `auth`)

## Rotas de Realiza

- **GET /realiza** — `RealizasController.index`
- **GET /realiza/:id** — `RealizasController.show`
- **POST /realiza** — `RealizasController.store`
- **PUT /realiza/:id** — `RealizasController.update`
- **DELETE /realiza/:id** — `RealizasController.destroy`

## Rotas Protegidas: Turma, Aluno, Professor e Aula (middleware: `auth`)

### Turma
- **GET /turma** — `TurmasController.index`
- **GET /turma/:id** — `TurmasController.show`
- **POST /turma** — `TurmasController.store`
- **PUT /turma/:id** — `TurmasController.update`
- **DELETE /turma/:id** — `TurmasController.destroy`

### Aluno
- **GET /aluno** — `AlunosController.index`
- **GET /aluno/:id** — `AlunosController.show`
- **POST /aluno** — `AlunosController.store`
- **PUT /aluno/:id** — `AlunosController.update`
- **DELETE /aluno/:id** — `AlunosController.destroy`

### Professor
- **GET /professor** — `ProfessorsController.index`
- **GET /professor/:id** — `ProfessorsController.show`
- **POST /professor** — `ProfessorsController.store`
- **PUT /professor/:id** — `ProfessorsController.update`
- **DELETE /professor/:id** — `ProfessorsController.destroy`

### Aula
- **GET /aula** — `AulasController.index`
- **GET /aula/:id** — `AulasController.show`
- **POST /aula** — `AulasController.store`
- **PUT /aula/:id** — `AulasController.update`
- **DELETE /aula/:id** — `AulasController.destroy`


## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <linkdorepositorio>
2. Instale as dependências:
    ```bash
    npm install
3. Rode as migrações do banco de dados:
     ```bash
    adonis migration:run
5. Inicie o servidor:
   ```bash
   yarn dev


## Autores

- [@Pedro Gabriel](https://github.com/LPeter-nm)
- [@Jhoão Pedro](https://www.github.com/jhopn)

