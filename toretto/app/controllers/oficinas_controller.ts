// import type { HttpContext } from '@adonisjs/core/http'

import Oficina from "#models/oficina"
import { HttpContext } from "@adonisjs/core/http"

export default class OficinasController {
    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Oficina.query().paginate(page, perpage)
        // ,preload('')
    }

    async show({ params }: HttpContext) {
        return await Oficina.query().where('id',params.id).preload('cliente').preload('funcionario').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome','endereco','funcionarioId','clienteId'])
        return await Oficina.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const oficina = await Oficina.findOrFail(params.id)
        const dados = request.only(['nome','endereco','funcionarioId','clienteId'])

        oficina.merge(dados)
        return await oficina.save()

    }

    async destroy({ params }: HttpContext) {
        const oficina = await Oficina.findOrFail(params.id)

        await oficina.delete()
        return { msg: 'Registro deletado com sucesso', Oficina }

    }



}