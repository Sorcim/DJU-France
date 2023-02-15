import { BaseModel, BelongsTo, belongsTo, column, computed } from "@ioc:Adonis/Lucid/Orm"
import City from "App/Models/City"
import { DateTime } from "luxon"

export default class Temperature extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column({ serializeAs: "departement" })
  public cityId: number

  @belongsTo(() => City)
  public city: BelongsTo<typeof City>

  @column.date()
  public date: DateTime

  @column()
  public min: number

  @column()
  public max: number

  @computed()
  public get dju_simple(): number {
    const moy = (this.max + this.min) / 2
    return moy < 18 ? Number((18 - moy).toFixed(2)) : 0
  }

  @computed()
  public get dju_complex(): number {
    if (18 <= this.max && 18 >= this.min) {
      return Number(
        ((18 - this.min) * (0.08 + (0.42 * (18 - this.min)) / (this.max - this.min))).toFixed(2)
      )
    }
    return this.dju_simple
  }
}
