import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CarroClientes extends BaseSchema {
  protected tableName = 'carro_cliente'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      table.integer('carro_id').unsigned().references('id').inTable('carros')
  
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
