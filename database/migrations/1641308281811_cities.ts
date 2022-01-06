import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cities extends BaseSchema {
  protected tableName = 'cities'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('department_number')
      table.string('department_name')
      table.string('ow_id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
