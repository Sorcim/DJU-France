import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class Access extends BaseSchema {
  protected tableName = "access"

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id")
      table.string("token").unique()
      table.string("name")
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
