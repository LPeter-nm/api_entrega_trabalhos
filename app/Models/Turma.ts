import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno'
import Aula from './Aula'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ano: string

  @column()
  public tipo_ensino: string

  @column()
  public detalhes: string

  @column()
  public turno: string

  @hasMany(() => Aluno)
  public alunos: HasMany<typeof Aluno>

  @hasMany(() => Aula)
  public aulas: HasMany<typeof Aula>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
