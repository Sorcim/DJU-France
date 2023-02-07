import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class TemperatureFloats extends BaseSchema {
  protected tableName = "temperatures"

  public async up() {
    this.schema.alterTable(this.tableName, table => {
      table.float("min")
      table.float("max")
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, table => {
      table.integer("min")
      table.integer("max")
    })
  }
}
