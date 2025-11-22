import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default async function handler(req: any, res: any) {
  await registerRoutes(app);
  return app(req, res);
}
