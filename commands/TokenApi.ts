import { args, BaseCommand } from "@adonisjs/core/build/standalone"
import { string } from "@poppinss/utils/build/helpers"

export default class TokenApi extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "api:token"

  /**
   * Command description is displayed in the "help" output
   */
  public static description = "Generate a token to use API"

  @args.string({ description: "Name of the token" })
  public name: string

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const token = string.generateRandom(32)
    const { default: Access } = await import("App/Models/Access")
    await Access.create({
      token: token,
      name: this.name,
    })
    this.logger.info(`Votre token ${this.name} : ${token}`)
  }
}
