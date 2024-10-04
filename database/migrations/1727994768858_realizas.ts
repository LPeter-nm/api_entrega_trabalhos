import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'realizas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('trabalho_id').unsigned().references('id').inTable('trabalhos').onDelete('SET NULL').onUpdate('CASCADE')
      table.integer('aluno_id').unsigned().references('id').inTable('alunos').onDelete('SET NULL').onUpdate('CASCADE')
      table.date('data_entrega').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
