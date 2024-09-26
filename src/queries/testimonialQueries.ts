import { eq } from "drizzle-orm";

import { db } from "../models/db";
import type { InsertTestimonial } from "../models/testimonialModel";
import { testimonials as testimonialsTable } from "../models/db/schema/testimonialSchema";

export const getAllTestimonials = async () => {
  const result = await db.select().from(testimonialsTable);
  return result;
};

export const postTestimonial = async (data: InsertTestimonial) => {
  const result = await db
    .insert(testimonialsTable)
    .values(data)
    .returning()
    .then((res) => res[0]);

  return result;
};

export const deleteTestimonial = async (id: number) => {
  const result = await db
    .delete(testimonialsTable)
    .where(eq(testimonialsTable.id, id))
    .returning()
    .then((res) => res[0]);

  return result;
};
