import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

// Middleware
app.use("*", logger());

// Routes

Bun.serve({
  fetch: app.fetch,
}); 

console.log("Server Running...");
