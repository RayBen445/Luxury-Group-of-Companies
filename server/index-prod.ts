import fs from "node:fs";
import path from "node:path";
import { type Server } from "node:http";

import express, { type Express } from "express";
import runApp from "./app";

export async function serveStatic(app: Express, _server: Server) {
  // In production on Vercel, look for the built dist directory
  // Try multiple possible paths to be compatible with different deployment scenarios
  const possiblePaths = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(import.meta.dirname, "..", "dist", "public"),
    path.resolve("/var/task", "dist", "public"),
  ];

  let distPath = "";
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      distPath = p;
      break;
    }
  }

  if (!distPath) {
    console.error(
      `Could not find the build directory in any of these locations:`,
      possiblePaths
    );
    throw new Error(
      `Could not find the build directory: ${possiblePaths.join(", ")}. Make sure to run 'npm run build' first.`
    );
  }

  console.log(`Serving static files from: ${distPath}`);

  app.use(express.static(distPath));

  // Fall through to index.html for client-side routing
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("index.html not found");
    }
  });
}

(async () => {
  await runApp(serveStatic);
})();
