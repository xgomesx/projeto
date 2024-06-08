import Servico from '#models/servico'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Servico.createMany([
      {servico:"Troca de óleo do motor e filtro de óleo."},
      {servico:"Alinhamento e Balanceamento."},
      {servico:"Troca de Pneu."},
      {servico:"Troca de Filtro de Ar."},
    ])
  }
}