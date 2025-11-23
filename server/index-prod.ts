import fs from "node:fs";
import path from "node:path";
import { type Server } from "node:http";

import express, { type Express } from "express";
import runApp from "./app";

export async function serveStatic(app: Express, _server: Server) {
  // Determine the dist/public directory
  // In Vercel: dist/public is at the root level
  // Using __dirname won't work with ESM, so we use process.cwd()
  const distPath = path.join(process.cwd(), "dist", "public");

  console.log(`[Static Server] Looking for static files at: ${distPath}`);
  console.log(`[Static Server] Path exists: ${fs.existsSync(distPath)}`);

  if (!fs.existsSync(distPath)) {
    console.error(`ERROR: Static files directory not found at ${distPath}`);
    console.error(`Current working directory: ${process.cwd()}`);
    console.error(`Contents of dist: ${fs.readdirSync(path.join(process.cwd(), "dist")).join(", ")}`);
    throw new Error(
      `Static files directory not found at ${distPath}. Make sure to run 'npm run build' first.`
    );
  }

  console.log(
    `[Static Server] Serving static files from: ${distPath}`
  );

  // Serve static assets with proper caching
  app.use(
    express.static(distPath, {
      maxAge: "1h",
      etag: false,
    })
  );

  // SPA fallback: serve index.html for all non-API routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(distPath, "index.html");
    
    if (!fs.existsSync(indexPath)) {
      console.error(`ERROR: index.html not found at ${indexPath}`);
      return res.status(404).send("index.html not found");
    }

    res.header("Content-Type", "text/html; charset=utf-8");
    res.sendFile(indexPath);
  });
}

(async () => {
  await runApp(serveStatic);
})();
