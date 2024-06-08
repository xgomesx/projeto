import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'servicos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('servico', 50).notNullable()
      table.integer('carro_id').unsigned().references('id').inTable('carros')
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}