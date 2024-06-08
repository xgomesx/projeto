import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Funcionario from './funcionario.js'

// import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Oficina extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare endereco: string

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario>



}