import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Trabalho from './Trabalho'

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public data_aula: Date

  @column()
  public turmaId: number

  @column()
  public professorId: number

  @hasMany(() => Trabalho)
  public trabalhos: HasMany<typeof Trabalho>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
