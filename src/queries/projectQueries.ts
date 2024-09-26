import { eq } from "drizzle-orm";

import { db } from "../db";
import type { InsertProject } from "../models/projectModel";
import { projects as projectsTable } from "../db/schema/projectSchema";

export const getAllProjects = async () => {
  const result = await db.select().from(projectsTable);
  return result;
};
export const postProject = async (data: InsertProject) => {
  const result = await db
    .insert(projectsTable)
    // @ts-ignore
    .values(data)
    .returning()
    .then((res) => res[0]);

  return result;
};
export const deleteProject = async (id: number) => {
  const result = await db
    .delete(projectsTable)
    .where(eq(projectsTable.id, id))
    .returning()
    .then((res) => res[0]);

  return result;
};
