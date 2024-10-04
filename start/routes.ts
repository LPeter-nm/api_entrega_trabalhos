import Route from '@ioc:Adonis/Core/Route'

Route.post("/session", 'SessionsController.store')
Route.delete("/session", 'SessionsController.destroy').middleware('auth')

Route.get('/trabalho/:id', 'TrabalhosController.show')
Route.post('/trabalho', 'TrabalhosController.store')
Route.delete('/trabalho/:id', 'TrabalhosController.destroy')

Route.resource('/realiza', 'RealizasController').apiOnly()

Route.group(() => {
  Route.get('/trabalho', 'TrabalhosController.index')
  Route.put('/trabalho/:id', 'TrabalhosController.update')

  Route.resource('/turma', 'TurmasController').apiOnly()
  Route.resource('/aluno', 'AlunosController').apiOnly()
  Route.resource('/professor', 'ProfessorsController').apiOnly()
  Route.resource('/aula', 'AulasController').apiOnly()
}).middleware('auth')
