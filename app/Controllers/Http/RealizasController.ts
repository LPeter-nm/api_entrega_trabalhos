import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Realiza from 'App/Models/Realiza'

export default class RealizasController {
  public async index({response}: HttpContextContract) {
    try {
      const realiza = await Realiza.query()
      return realiza;
    } catch (error) {
        return response.status(400).json({
          error: 'Erro ao encontrar relação', 
          message: error.message
      });  
    }
  }

  public async store({request, response }: HttpContextContract) {
    try {
      const { trabalhoId, alunoId, data_entrega }= request.only(['trabalhoId', 'alunoId', 'data_entrega'])
      const realizaReturn = await Realiza.create({ trabalhoId, alunoId, data_entrega})
      return realizaReturn;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao criar Realiza', 
        message: error.message
    });  
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
      const realiza = await Realiza.findByOrFail('id', params.id)
      return realiza;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao criar Realiza', 
        message: error.message
    }); 
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
      const realiza = await Realiza.findByOrFail('id', params.id)
      const { data_entrega }= request.only(['data_entrega'])
      realiza.merge({data_entrega})
      realiza.save()
      return realiza;
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao atualizar dados da Realiza', 
        message: error.message
    }); 
      
    }
  }

  public async destroy({response, params}: HttpContextContract) {
    try {
        const realiza = await Realiza.findByOrFail('id', params.id)
        await realiza.delete()
        return response.status(203)       
    } catch (error) {
        return response.status(400).json({
          error: 'Erro ao deletar Realiza', 
          message: error.message
      }); 
    }
  }
}
