import runApp from "./app";
import { serveStatic } from "./serve-static";

// In production, runApp returns the Express app configured for Vercel
// No server.listen() is called - Vercel handles that
const app = await runApp(serveStatic);

export default app;
