import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";

const app = new Hono();

// Middleware
app.use("*", logger());

// Routes
app.route("/api/expenses", expensesRoute);

export default app;
