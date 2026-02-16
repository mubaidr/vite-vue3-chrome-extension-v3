import { createRouter, createWebHashHistory } from "vue-router"
import { handleHotUpdate, routes } from "vue-router/auto-routes"

const finalRoutes = [
  ...routes,
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
  },
]

export const appRouter = createRouter({
  history: createWebHashHistory(),
  routes: finalRoutes,
})

if (import.meta.hot) {
  handleHotUpdate(appRouter)
}
