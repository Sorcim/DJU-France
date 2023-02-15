import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Access from "App/Models/Access"

export default class ApiToken {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const bearerToken = request.header("Authorization")

    if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
      return response.status(401).json({ error: "Token not provided" })
    }
    const token = bearerToken.substring(7, bearerToken.length)
    try {
      await Access.findByOrFail("token", token)
    } catch (error) {
      return response.status(401).json({ error: "Invalid token" })
    }
    await next()
  }
}
