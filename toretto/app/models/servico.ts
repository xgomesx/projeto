import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Carro from './carro.js'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import Funcionario from './funcionario.js'

export default class Servico extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare servico: string 

  @column()
  declare carroId: number 
  @column()
  declare funcionarioId: number 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Carro)
declare carro:BelongsTo<typeof Carro>

@belongsTo(()=> Funcionario)
declare Funcionario :BelongsTo<typeof Funcionario>


}

