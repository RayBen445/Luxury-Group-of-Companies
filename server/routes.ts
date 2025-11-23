import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema, insertNewsletterSchema, insertFoodOrderSchema, insertBankAccountSchema, insertBankCardSchema, insertTransactionSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";

// Type augmentation for express-session
declare global {
  namespace Express {
    interface Request {
      session: {
        userId?: string;
        destroy(callback: (err?: Error) => void): void;
      };
    }
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const parsed = insertUserSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const existingUser = await storage.getUserByUsername(parsed.data.username);
      if (existingUser) {
        return res.status(409).json({ error: "Username already exists" });
      }
      const user = await storage.createUser(parsed.data);
      req.session.userId = user.id;
      res.json({ success: true });
    } catch (error) {
      console.error("Error signing up:", error);
      res.status(500).json({ error: "Failed to create account" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const schema = z.object({
        username: z.string(),
        password: z.string(),
      });
      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const user = await storage.verifyUserPassword(parsed.data.username, parsed.data.password);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      req.session.userId = user.id;
      res.json({ success: true });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Failed to login" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err?: Error) => {
      if (err) {
        return res.status(500).json({ error: "Failed to logout" });
      }
      res.json({ success: true });
    });
  });

  app.post("/api/reservations", async (req, res) => {
    try {
      const parsed = insertReservationSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid reservation data" });
      }
      const reservation = await storage.createReservation(parsed.data);
      res.json(reservation);
    } catch (error) {
      console.error("Error creating reservation:", error);
      res.status(500).json({ error: "Failed to create reservation" });
    }
  });

  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({ error: "Failed to fetch reservations" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid email" });
      }
      const newsletter = await storage.subscribeNewsletter(parsed.data);
      res.json(newsletter);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  app.post("/api/food-orders", async (req, res) => {
    try {
      const parsed = insertFoodOrderSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid order data" });
      }
      const order = await storage.createFoodOrder(parsed.data);
      res.json(order);
    } catch (error) {
      console.error("Error creating food order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  app.get("/api/food-orders", async (req, res) => {
    try {
      const orders = await storage.getFoodOrders();
      res.json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });

  // Banking routes
  app.post("/api/bank/accounts", async (req, res) => {
    try {
      const parsed = insertBankAccountSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid account data", issues: parsed.error.issues });
      }
      const account = await storage.createBankAccount(parsed.data);
      res.json(account);
    } catch (error) {
      console.error("Error creating bank account:", error);
      res.status(500).json({ error: "Failed to create account" });
    }
  });

  app.get("/api/bank/accounts/:email", async (req, res) => {
    try {
      const accounts = await storage.getBankAccountsByEmail(req.params.email);
      res.json(accounts);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      res.status(500).json({ error: "Failed to fetch accounts" });
    }
  });

  app.get("/api/bank/accounts/:id/cards", async (req, res) => {
    try {
      const cards = await storage.getBankCardsByAccountId(req.params.id);
      res.json(cards);
    } catch (error) {
      console.error("Error fetching cards:", error);
      res.status(500).json({ error: "Failed to fetch cards" });
    }
  });

  app.post("/api/bank/cards", async (req, res) => {
    try {
      const parsed = insertBankCardSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid card data" });
      }
      const card = await storage.createBankCard(parsed.data);
      res.json(card);
    } catch (error) {
      console.error("Error creating bank card:", error);
      res.status(500).json({ error: "Failed to create card" });
    }
  });

  app.get("/api/bank/transactions/:accountId", async (req, res) => {
    try {
      const transactions = await storage.getTransactionsByAccountId(req.params.accountId);
      res.json(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  });

  app.post("/api/bank/transactions", async (req, res) => {
    try {
      const parsed = insertTransactionSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid transaction data" });
      }
      const transaction = await storage.createTransaction(parsed.data);
      res.json(transaction);
    } catch (error) {
      console.error("Error creating transaction:", error);
      res.status(500).json({ error: "Failed to create transaction" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
