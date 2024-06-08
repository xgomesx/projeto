// import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "#models/cliente"
import { HttpContext } from "@adonisjs/core/http"

export default class ClientesController {
    async index({ request }: HttpContext) {
        const page = request.input('page')
        const perpage = request.input('perpage', 10)
        return await Cliente.query().paginate(page, perpage)
    }
    async show({ params }: HttpContext) {

        return await Cliente.query().where('id',params.id).preload('Oficina').preload('carro').first()    
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cpf', 'telefone','email','oficinaId','carroId'])
        return await Cliente.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const cliente = await Cliente.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'telefone','email','oficinaId','carroId'])

        cliente.merge(dados)
        return await cliente.save()

    }

    async destroy({ params }: HttpContext) {
        const cliente = await Cliente.findOrFail(params.id)


        await cliente.delete()

        return { msg: 'Registro deletado com sucesso!', Cliente }


    }
}
