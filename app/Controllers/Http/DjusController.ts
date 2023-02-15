import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import { z } from "zod"
import Temperature from "App/Models/Temperature"
import { DateTime } from "luxon"

export default class DjusController {
  LIMIT = 50
  public async daily({ request, response }: HttpContextContract) {
    const qs = { ...request.qs(), ...request.params() }
    const query = z
      .object({
        id: z.coerce.number(),
        date: z.coerce.date(),
        limit: z.coerce.number().optional().default(this.LIMIT),
      })
      .safeParse(qs)
    if (!query.success) {
      return response.status(400).json({ error: "Bad Request" })
    }
    const temps = await Temperature.query()
      .where("city_id", query.data.id)
      .andWhere("date", ">=", query.data.date)
      .orderBy("date", "asc")
      .limit(query.data.limit)

    return response.status(200).json(temps)
  }

  public async monthly({ request, response }: HttpContextContract) {
    const qs = { ...request.qs(), ...request.params() }
    const query = z
      .object({
        id: z.coerce.number(),
        month: z.coerce.number().min(1).max(12),
        year: z.coerce.number().min(2023),
      })
      .safeParse(qs)
    if (!query.success) {
      return response.status(400).json({ error: "Bad Request" })
    }
    const start = DateTime.local(query.data.year, query.data.month, 1)
    const end = DateTime.local(query.data.year, query.data.month, 1).plus({ months: 1 })
    const temps = await Temperature.query()
      .where("city_id", query.data.id)
      .andWhere("date", ">=", start.toString())
      .andWhere("date", "<", end.toString())
      .orderBy("date", "asc")

    return response.status(200).json(temps)
  }
}
