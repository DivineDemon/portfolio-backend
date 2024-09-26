import { Hono } from "hono";
import { logger } from "hono/logger";
import { projectsRoute } from "./routes/projects";
import { testimonialsRoute } from "./routes/testimonials";

const app = new Hono();
const baseApiRouter = app.basePath("/api");

// Middleware
app.use("*", logger());

// Routes
baseApiRouter.route("/projects", projectsRoute);
baseApiRouter.route("/testimonials", testimonialsRoute);

Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT || 8080,
});

console.log("Server Running...");
