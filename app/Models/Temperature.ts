import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm"
import City from "App/Models/City"
import { DateTime } from "luxon"

export default class Temperature extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cityId: number

  @belongsTo(() => City)
  public city: BelongsTo<typeof City>

  @column.date()
  public date: DateTime

  @column()
  public min: string

  @column()
  public max: string
}
