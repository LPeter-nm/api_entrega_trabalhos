import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Realiza from './Realiza'

export default class Trabalho extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public nota: number

  @column()
  public conteudo: string

  @column()
  public descricao: string

  @column()
  public aulaId: number

  @hasMany(() => Realiza)
  public entregas: HasMany<typeof Realiza>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
