import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {nome: "joao gabriel", cpf:"12345678909",endereco:"vasco",telefone: "6149928922",sexo:"sg", oficinaId: 1,servicoId:4}
    ])
    }
}