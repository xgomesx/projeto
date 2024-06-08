import { DateTime } from 'luxon'
import  { BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import  Carro from './carro.js'
import Oficina from './oficina.js'
import type {  BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
  
  @column()
  declare cpf: string
  
  @column()
  declare telefone: string
  
  @column()
  declare email: string

  @column()
  declare carroId: number
  @column()
  declare oficinaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime



  @belongsTo(()=>Carro)
  declare carro:BelongsTo <typeof Carro>
 
  @belongsTo(()=> Oficina)
  declare Oficina:BelongsTo<typeof Oficina>
}