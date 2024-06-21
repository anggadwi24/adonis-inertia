import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('username', 40).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.timestamp('created_at').notNullable() 
      table.string('created_by').nullable()
      table.timestamp('updated_at').nullable()
      table.string('updated_by').nullable()
      table.timestamp('deleted_at').nullable() 
      table.string('deleted_by').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}