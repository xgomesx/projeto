import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import  type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Oficina from './oficina.js'
import Servico from './servico.js'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare endereco: string

  @column()
  declare sexo: string

  @column()
  declare telefone: string

  @column()
  declare oficinaId: number
  
  @column()
  declare servicoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @belongsTo(()=> Oficina)
  declare Oficina:BelongsTo<typeof Oficina>

  @hasOne(()=>Servico)
  declare Servico:HasOne<typeof Servico>
}
