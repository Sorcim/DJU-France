/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route"
import City from "App/Models/City"
import Temperature from "App/Models/Temperature"

Route.get("/department/:idDpt", async ({ request }) => {
  const limit = 10
  const dpt = request.param("idDpt")
  const city = await City.findByOrFail("department_number", dpt)
  const date = request.input("date", false)
  let temperatures
  if (date) {
    temperatures = await Temperature.query()
      .where("city_id", city.id)
      .where("date", date)
      .paginate(request.input("page", 1), limit)
  } else {
    temperatures = await Temperature.query()
      .where("city_id", city.id)
      .paginate(request.input("page", 1), limit)
  }

  return temperatures.serialize()
})
