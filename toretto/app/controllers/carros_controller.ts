// import type { HttpContext } from '@adonisjs/core/http'

import Carro from "#models/carro"
import { HttpContext } from "@adonisjs/core/http"

export default class CarrosController {
    async index({ request }: HttpContext) {
        const page = request.input('page')
        const perpage = request.input('perpage', 10)
        return await Carro.query().paginate(page, perpage)
    }
    async show({ params }: HttpContext) {

        return await Carro.query().where('id',params.id).preload('cliente').preload('servico').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only([ 'ano','placa','marca','modelo','cor','servicoId','clienteId'])
        return await Carro.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const carro = await Carro.findOrFail(params.id)
        const dados = request.only([ 'ano','placa','marca','modelo','cor','servicoId','clienteId'])

        carro.merge(dados)
        return await carro.save()

    }

    async destroy({ params }: HttpContext) {
        const carro = await Carro.findOrFail(params.id)


        await carro.delete()

        return { msg: 'Registro deletado com sucesso!', Carro }


    }


}