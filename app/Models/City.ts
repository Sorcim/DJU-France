import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm"
import Temperature from "App/Models/Temperature"

export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public owId: string

  @column()
  public departmentName: string

  @column()
  public departmentNumber: string

  @hasMany(() => Temperature)
  public temperatures: HasMany<typeof Temperature>
}
