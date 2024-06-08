
import Carro from '#models/carro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
  await Carro.createMany([
    {ano:"1989",placa:'mmm-456',marca:'chevrolet',modelo:'opala',cor:'azul',servicoId:1,clienteId:2}
  ])  
  
  }
}