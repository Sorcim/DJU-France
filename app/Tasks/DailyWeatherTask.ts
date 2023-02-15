import { BaseTask } from "adonis5-scheduler/build"
import Env from "@ioc:Adonis/Core/Env"
import City from "App/Models/City"
import Temperature from "App/Models/Temperature"
import { DateTime } from "luxon"
import { Error } from "memfs/lib/internal/errors"

export default class DailyWeatherTask extends BaseTask {
  public static get schedule() {
    return "0 0 */1 * * *"
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
    this.logger.info(
      DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss") + " - DailyWeatherTask is running..."
    )
    const api = Env.get("OW_API")
    const cities = await City.all()
    cities.map(async city => {
      const temperature = await Temperature.query()
        .where("city_id", city.id)
        // @ts-ignore
        .andWhere("date", DateTime.now())
        .first()
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${city?.owId}&units=metric&appid=${api}`
      )
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response.statusText)
          }
        })
        .then(async data => {
          if (temperature) {
            temperature.min = Math.min(data.main.temp_min, temperature.min)
            temperature.max = Math.max(data.main.temp_max, temperature.max)
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
          // @ts-ignore
          this.logger.error(`Error on city ${city.id} : ${error}`)
        })
    })
  }
}
