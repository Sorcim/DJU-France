import Route from "@ioc:Adonis/Core/Route"

Route.group(() => {
  Route.get("/dju/daily/:id", "DjusController.daily")
  Route.get("/dju/monthly/:id", "DjusController.monthly")
})
  .prefix("api/v1")
  .middleware("apiToken")
