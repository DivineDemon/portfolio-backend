import { z } from "zod";

export const testimonialModel = z.object({
  id: z.number(),
  company: z.string(),
  content: z.string(),
  designation: z.string(),
  client_name: z.string(),
  image: z.string().optional(),
});
