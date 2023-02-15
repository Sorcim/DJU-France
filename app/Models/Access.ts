import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm"

export default class Access extends BaseModel {
  public static table = "access"

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public token: string
}
