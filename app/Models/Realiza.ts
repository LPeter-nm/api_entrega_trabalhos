import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Realiza extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data_entrega: Date

  @column()
  public alunoId: number

  @column()
  public trabalhoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
