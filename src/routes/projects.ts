import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import {
  postProject,
  deleteProject,
  getAllProjects,
} from "../queries/projectQueries";
import { insertProject } from "../models/projectModel";
import { insertProjectSchema } from "../db/schema/projectSchema";

export const projectsRoute = new Hono()
  .get("/", async (c) => {
    try {
      const projects = await getAllProjects();

      return c.json({
        success: true,
        message: "Projects Fetched Successfully!",
        data: projects,
      });
    } catch (error) {
      return c.json({
        success: false,
        message: "Projects Fetch Failed!",
        data: error,
      });
    }
  })
  .post("/", zValidator("json", insertProject), async (c) => {
    const project = c.req.valid("json");
    const validatedProject = insertProjectSchema.parse(project);

    const result = await postProject(validatedProject);

    c.status(201);
    return c.json({
      success: true,
      message: "Project Added Successfully!",
      data: result,
    });
  })
  .delete("/:id{[0-9]+}", async (c) => {
    const id = parseInt(c.req.param("id"));
    const result = await deleteProject(id);

    // @ts-ignore
    if (!result) {
      return c.notFound();
    }

    c.status(200);
    return c.json({
      success: 1,
      message: "Project Deleted Successfully!",
      data: result,
    });
  });
