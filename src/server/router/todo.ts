import { createRouter } from "./context";
import { z } from "zod";

export const TodoRouter = createRouter()
  .mutation("addTodo", {
    input: z.object({
      title: z.string(),
      description: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      const newTodo = await ctx.prisma.todo.create({
        data: {
          title: input.title,
          description: input.description,
        },
      });
      return {
        newTodo,
      };
    },
  })