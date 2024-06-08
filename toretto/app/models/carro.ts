import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany} from '@adonisjs/lucid/orm'
import Servico from './servico.js'
import type {  ManyToMany } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'

export default class Carro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare ano: string
  
  @column()
  declare placa: string
  
  @column()
  declare marca: string
  
  @column()
  declare modelo: string
  
  @column()
  declare cor: string
  
  @column()
  declare clienteId: number
  
  @column()
  declare servicoId: number

  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @manyToMany(()=>Servico)
  declare servico:ManyToMany <typeof Servico>

  @manyToMany(()=>Cliente)
  declare cliente:ManyToMany<typeof Cliente>
}