import { sql } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  features: text("features")
    .default(sql`ARRAY[]::text[]`)
    .notNull(),
  link: text("link").notNull(),
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  start_year: integer("start_year").notNull(),
  project_name: text("project_name").notNull(),
});
