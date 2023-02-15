import { ApplicationContract } from "@ioc:Adonis/Core/Application"
import Env from "@ioc:Adonis/Core/Env"

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
    if (Env.get("NODE_ENV", "development") !== "development") {
      const scheduler = this.app.container.use("Adonis/Addons/Scheduler")
      scheduler.run()
    }
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
