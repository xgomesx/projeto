import Oficina from '#models/oficina'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Oficina.createMany([/*  */
      {nome:'martelin de prata', endereco:'rua vasco da gama ',id:1 , funcionarioId: 1, clienteId: 1 }
    ])
  }
}