// src/pages/api/todos.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const todos = async (req: NextApiRequest, res: NextApiResponse) => {
  // const todos = await prisma.todo.findMany()
  // if (todos) {
  //   return res.status(200).json(todos);
  // }
  return res.status(200).json("No Todos")
};

export default todos;
