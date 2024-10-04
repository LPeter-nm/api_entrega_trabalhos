import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Turma from 'App/Models/Turma'

export default class TurmasController {
    public async index({response}: HttpContextContract) {
        try {
          const turmas = await Turma.query().preload('alunos').preload('aulas')
          return turmas
        } catch (error) {
          return response.status(400).json({
            error: 'Erro ao encontrar Turmas', 
            message: error.message
          })
        }
      }
    
      public async store({request, response}: HttpContextContract) {
        try {
          const { ano, tipo_ensino, detalhes, turno } = request.only(['ano', 'tipo_ensino',  'detalhes', 'turno'])
          const turma = await Turma.create({
            ano, 
            tipo_ensino,
            detalhes, 
            turno
          })
    
          return turma
        } catch (error) {
          return response.status(400).json({
            error: 'Erro ao registrar Turma', 
            message: error.message
          })
        }
      }
    
      public async show({response, params}: HttpContextContract) {
        try {
          const turma = await Turma.findByOrFail('id', params.id)
          return turma;
        } catch (error) {
          return response.status(400).json({
            error: 'Erro ao encontrar Turma', 
            message: error.message
          })
        }
      }
    
      public async update({request, response, params}: HttpContextContract) {
        try {
          const { ano, tipo_ensino, detalhes, turno } = request.only([ 'ano', 'tipo_ensino', 'detalhes', 'turno'])
          const turma = await Turma.findByOrFail('id', params.id)
          turma.merge({ ano, tipo_ensino, detalhes, turno})
          turma.save()
          return turma;
        } catch (error) {
          return response.status(400).json({
            error: 'Erro ao atualizar dados do Turma', 
            message: error.message
          })
        }
      }
    
      public async destroy({response, params}: HttpContextContract) {
        try {
          const turma = await Turma.findByOrFail('id', params.id)
          await turma.delete()
          return response.status(203)
        } catch (error) {
          return response.status(400).json({
            error: 'Erro ao deletar dados do Turma', 
            message: error.message
          })
        }
      }
}
