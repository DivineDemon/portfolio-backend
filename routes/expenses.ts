import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

const createPostSchema = z.object({
  title: z.string(),
  amount: z.number().positive(),
});

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({
      message: "Expenses Route!",
    });
  })
  .post("/", zValidator("json", createPostSchema), async (c) => {
    const data = await c.req.valid("json");

    return c.json({
      message: "Expenses Route!",
      data,
    });
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id")!);

    return c.json({
      message: "Expenses Route!",
      data: id,
    });
  });
