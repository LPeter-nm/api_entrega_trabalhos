import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Aula from './Aula'

export default class Professor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public nome: string

  @column()
  public titulacao: string

  @column()
  public telefone: string
  
  @column()
  public email: string

  @column()
  public password: string

  @column()
  public token: string | null

  @hasMany(() => Aula)
  public aulas: HasMany<typeof Aula>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (professor: Professor) {
    if (professor.$dirty.password) {
      professor.password = await Hash.make(professor.password)
    }
  }
}
