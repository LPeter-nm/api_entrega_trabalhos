import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Trabalho from 'App/Models/Trabalho';

export default class TrabalhosController {
    public async index({response}: HttpContextContract) {
        try {
            const trabalhos = await Trabalho.query()
            return trabalhos;
        } catch (error) {
            return response.status(400).json({
                error: 'Erro ao encontrar trabalhos', 
                message: error.message
            });  
        }
    }
    public async store({request, response}: HttpContextContract) {
        try {
            const { aulaId, titulo, descricao, conteudo} = request.only(['aulaId', 'titulo', 'descricao', 'conteudo'])
            const trabalho = await Trabalho.create({aulaId ,titulo, descricao, conteudo})
            return trabalho;
        } catch (error) {
            return response.status(400).json({
                error: 'Erro ao criar trabalho ', 
                message: error.message
            });   
        }
    }
  
    public async show({params, response}: HttpContextContract) {
        try {
            const trabalho = await Trabalho.findByOrFail('id', params.id) 
            return trabalho;
        } catch (error) {
            return response.status(400).json({
                error: 'Erro ao buscar o trabalho', 
                message: error.message
            }); 
        }
    }
  
    public async update({request, response, params}: HttpContextContract) {
        try {
            const trabalho = await Trabalho.findByOrFail('id', params.id) 
            const { descricao, nota } = request.only(['descricao', 'nota'])
            trabalho.merge({ descricao, nota })
            trabalho.save()
            return trabalho;
        } catch (error) {
            return response.status(400).json({
                error: 'Erro ao atualizar o trabalho', 
                message: error.message
            }); 
        }
    }
  
    public async destroy({params, response}: HttpContextContract) {
        try {
            const trabalho = await Trabalho.findByOrFail('id', params.id) 
            await trabalho.delete()
            return response.status(203) 
        } catch (error) {
            return response.status(400).json({
                error: 'Erro ao deletar o trabalho', 
                message: error.message
            }); 
        }
    }
}
