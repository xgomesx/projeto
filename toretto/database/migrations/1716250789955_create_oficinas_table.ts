import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'oficinas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 55).notNullable().unique()
      table.string('endereco',50).notNullable()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      
      table.timestamp('created_at')
      table.timestamp('updated_at')


      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}