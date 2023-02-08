import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class TemperatureFloats extends BaseSchema {
  protected tableName = "temperatures"

  public async up() {
    this.schema.alterTable(this.tableName, table => {
      table.float("min").alter()
      table.float("max").alter()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, table => {
      table.integer("min").alter()
      table.integer("max").alter()
    })
  }
}
