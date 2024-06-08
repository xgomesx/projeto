import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {nome: "joao gabriel", cpf:"12345678909", telefone: "6149928922", email:"sg", oficinaId: 1, carroId:1},
    ])
  }
}