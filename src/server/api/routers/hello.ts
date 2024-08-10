import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const HelloRouter = createTRPCRouter({
  sayHello: publicProcedure
    .input(z.object({
      name: z.string()
    }))
    .query(({ input }) => `Hello ${input.name}`)
})