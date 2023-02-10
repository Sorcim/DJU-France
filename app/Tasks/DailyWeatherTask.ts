import { BaseTask } from "adonis5-scheduler/build"
import Env from "@ioc:Adonis/Core/Env"
import City from "App/Models/City"
import { DateTime } from "luxon"

export default class DailyWeatherTask extends BaseTask {
  public static get schedule() {
    return "0 * * * * *"
  }

  /**
   * Set enable use .lock file for block run retry task
   * Lock file save to `build/tmpTaskLock`
   */
  public static get useLock() {
    return false
  }

  public async handle() {
    // @ts-ignore
    this.logger.info("DailyWeatherTask is running...")
    const api = Env.get("OW_API")
    const cities = await City.all()
    cities.map(async city => {
      // @ts-ignore
      const temperature = await Temperature.query()
        .where("city_id", city.id)
        .andWhere("date", DateTime.now())
        .first()
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${city?.owId}&units=metric&appid=${api}`
      )
        .then(response => {
          return response.json()
        })
        .then(async data => {
          if (temperature) {
            temperature.min = Math.min(data.main.temp_min, parseInt(temperature.min)).toString()
            temperature.max = Math.max(data.main.temp_max, parseInt(temperature.max)).toString()
            await temperature.save()
          } else {
            await city.related("temperatures").create({
              min: data.main.temp_min,
              max: data.main.temp_max,
              date: DateTime.now(),
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
}
