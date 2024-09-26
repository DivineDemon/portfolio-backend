import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const testimonials = pgTable("testimonials", {
  image: text("image"),
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  designation: text("designation").notNull(),
  client_name: text("client_name").notNull(),
});
