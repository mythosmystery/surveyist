import { z } from "zod"
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/trpc"
import { clerkClient } from "@clerk/nextjs"

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),
  protectedHello: protectedProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.auth.userId
      const { firstName } = await clerkClient.users.getUser(userId)
      return {
        greeting: `Hello ${firstName || ""} ${input.text}`,
      }
    }),
})
