import { Hono } from "hono";
import { logger } from "hono/logger";
import { projectsRoute } from "./routes/projects";

const app = new Hono();
const baseApiRouter = app.basePath("/api");

// Middleware
app.use("*", logger());

// Routes
baseApiRouter.route("/projects", projectsRoute);

Bun.serve({
  fetch: app.fetch,
});

console.log("Server Running...");
