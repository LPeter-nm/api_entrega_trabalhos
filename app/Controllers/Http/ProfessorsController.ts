import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from 'App/Models/Professor';

export default class ProfessorsController {
  public async index({response}: HttpContextContract) {
    try {
      const professores = await Professor.query().preload('aulas')
      return professores;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao listas professores', 
        message: error.message
    }); 
    }
  }

  public async store({request, response}: HttpContextContract) {
    try {
      const { nome, cpf, email, password, titulacao, telefone } = request.only(['nome', 'cpf', 'email', 'password','titulacao', 'telefone'])
      const professor = await Professor.create({
        nome, 
        cpf, 
        email, 
        password, 
        titulacao, 
        telefone
      });
      return professor;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao criar professor', 
        message: error.message
    }); 
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
      const professor = await Professor.findByOrFail('id', params.id)
      return professor;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao listar professor', 
        message: error.message
    });  
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
      const professor = await Professor.findByOrFail('id', params.id)
      const { nome, password, titulacao, telefone } = request.only(['nome', 'password','titulacao', 'telefone'])
      professor.merge({nome, password, titulacao, telefone })
      professor.save()
      return professor;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao atualizar professor', 
        message: error.message
    }); 
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    try {
      const professor = await Professor.findByOrFail('id', params.id)
      await professor.delete()
      return response.status(203) 
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao deletar professor', 
        message: error.message
    });   
    }
  }
}
