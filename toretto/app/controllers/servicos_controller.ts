// import type { HttpContext } from '@adonisjs/core/http'


import Servico from "#models/servico"
import { HttpContext } from "@adonisjs/core/http"


export default class ServicoController {
    async index({ request }: HttpContext) {
        const page = request.input('page')
        const perpage=request.input('perpage',10)
        return await Servico.query().paginate(page, perpage)
    }
    async show({ params }: HttpContext) {

        return await Servico.query().where('id',params.id).preload('Funcionario').preload('carro').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['servico','carroId','funcionarioId'])
        return await Servico.create(dados)
    }

    async update({params,request}: HttpContext) {
        const servico = await Servico.findOrFail(params.id)
        const dados = request.only(['servico', 'carroId','funcionarioId'])
        servico.merge(dados)
        return await servico.save()
    
    }

    async destroy({params}: HttpContext) {
        const servico = await Servico.findOrFail(params.id)


     await servico.delete()

    return{msg:'Registro deletado com sucesso!', Servico }


    }
}