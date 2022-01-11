import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class Temperatures extends BaseSchema {
  protected tableName = "temperatures"

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id")
      table.integer("min")
      table.integer("max")
      table.date("date")
      table.integer("city_id").unsigned().references("cities.id").onDelete("CASCADE")
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
