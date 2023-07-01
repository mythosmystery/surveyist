import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "@/server/trpc"
import { ObjectId } from "mongodb"

export const surveyRouter = createTRPCRouter({
  saveSurvey: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        pages: z.array(z.any()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.userId
      const { upsertedId } = await ctx.survey.updateOne(
        { title: input.title },
        {
          $set: {
            title: input.title,
            description: input.description,
            pages: input.pages,
            userId,
          },
        },
        { upsert: true }
      )
      console.log(upsertedId)
    }),

  saveResponse: protectedProcedure
    .input(
      z.object({
        data: z.record(z.any()),
        surveyId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.userId
      console.log(input.data)
      const { upsertedId } = await ctx.response.updateOne(
        { surveyId: new ObjectId(input.surveyId), userId },
        {
          $set: {
            ...input.data,
          },
        },
        { upsert: true }
      )
      console.log(upsertedId)
    }),

  deleteSurvey: protectedProcedure
    .input(
      z.object({
        surveyId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.userId
      await ctx.survey.deleteOne({ _id: new ObjectId(input.surveyId), userId })
    }),
})
