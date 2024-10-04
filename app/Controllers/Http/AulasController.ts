import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aula from 'App/Models/Aula';

export default class AulasController {
  public async index({response}: HttpContextContract) {
    try {
      const aula = await Aula.query().preload('trabalhos')
      return aula;
    } catch (error) {
      response.status(401).json({
        error: 'Erro ao buscar aulas', 
        message: error.message
      });
    }
  }

  public async store({request,response}: HttpContextContract) {
    try {
      const { professorId, turmaId, descricao, data_aula }= request.only(['professorId', 'turmaId', 'descricao', 'data_aula'])
      const aulaReturn = await Aula.create({ professorId, turmaId, descricao, data_aula})
      return aulaReturn;
    } catch (error) {
      response.status(401).json({
        error: 'Erro ao criar aula', 
        message: error.message
      });
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
      const aula = await Aula.findByOrFail('id', params.id)
      return aula
    } catch (error) {
      response.status(401).json({
        error: 'Erro ao buscar a aula', 
        message: error.message
      });
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
      const { descricao, data_aula} = request.only(['descricao', 'data_aula'])
      const aula = await Aula.findByOrFail('id', params.id)
      aula.merge({ descricao, data_aula})
      aula.save()
      return aula
    } catch (error) {
      response.status(401).json({
        error: 'Erro ao atualizar aula', 
        message: error.message
      });
    }
  }

}
