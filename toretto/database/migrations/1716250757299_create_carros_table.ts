import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'carros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
     
      table.string('ano').nullable()
      table.string('placa').notNullable()
      table.string('marca').notNullable()
      table.string('modelo').notNullable()
      table.string('cor').nullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      table.integer('servico_id').unsigned().references('id').inTable('servicos')
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}