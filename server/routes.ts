import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema, insertNewsletterSchema, insertFoodOrderSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
