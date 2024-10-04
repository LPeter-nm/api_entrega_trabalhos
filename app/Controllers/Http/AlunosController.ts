import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Aluno from 'App/Models/Aluno'


export default class AlunosController {
  public async index({response}: HttpContextContract) {
    try {
      const alunos = await Aluno.query()
      return alunos
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao encontrar alunos', 
        message: error.message
      })
    }
  }

  public async store({request, response}: HttpContextContract) {
    try {
      const { turmaId, nome, telefone, cpf } = request.only(['turmaId', 'nome', 'telefone', 'cpf'])
      const aluno = await Aluno.create({
        turmaId,
        nome, 
        telefone, 
        cpf, 
      })

      return aluno
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao registrar aluno', 
        message: error.message
      })
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
      const aluno = await Aluno.findByOrFail('id', params.id)
      return aluno;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao encontrar aluno', 
        message: error.message
      })
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
      const { nome, telefone } = request.only(['nome', 'telefone', 'cpf', 'email'])
      const aluno = await Aluno.findByOrFail('id', params.id)
      aluno.merge({nome, telefone})
      aluno.save()
      return aluno;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao atualizar dados do aluno', 
        message: error.message
      })
    }
  }

  public async destroy({response, params}: HttpContextContract) {
    try {
      const aluno = await Aluno.findByOrFail('id', params.id)
      await aluno.delete()
      return response.status(203)
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao deletar dados do aluno', 
        message: error.message
      })
    }
  }
}
