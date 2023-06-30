import { exampleRouter } from "@/server/routers/example"
import { createTRPCRouter } from "@/server/trpc"
import { surveyRouter } from "@/server/routers/survey"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  survey: surveyRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
