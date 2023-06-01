import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ locale: z.string() }))
    .query(({ input }) => {
      return {
        greeting: input.locale === 'en' ? 'Hello from tRPC' : '你好，tRPC'
      }
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  })
})
