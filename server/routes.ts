import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertUserSchema,
  insertCategorySchema,
  insertProductSchema,
  insertCartItemSchema,
  insertOrderSchema,
  insertReviewSchema,
  insertVehicleSchema,
  insertReservationSchema,
  insertFoodOrderSchema,
  insertNewsletterSchema,
} from "@shared/schema";
import { z } from "zod";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const parsed = insertUserSchema.safeParse(req.body);
      if (!parsed.success) {
        console.error("Validation failed:", parsed.error.errors);
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const existingUser = await storage.getUserByUsername(parsed.data.username);
      if (existingUser) {
        return res.status(409).json({ error: "Username already exists" });
      }
      const user = await storage.createUser(parsed.data);
      req.session!.userId = user.id;
      res.json({ success: true, userId: user.id });
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
      req.session!.userId = user.id;
      res.json({ success: true, userId: user.id });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Failed to login" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session!.destroy((err: any) => {
      if (err) {
        return res.status(500).json({ error: "Failed to logout" });
      }
      res.json({ success: true });
    });
  });

  app.get("/api/auth/me", async (req, res) => {
    if (!req.session?.userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    const user = await storage.getUser(req.session.userId);
    res.json(user);
  });

  // Categories
  app.post("/api/categories", async (req, res) => {
    try {
      const parsed = insertCategorySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid category data" });
      }
      const category = await storage.createCategory(parsed.data);
      res.json(category);
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ error: "Failed to create category" });
    }
  });

  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Products
  app.post("/api/products", async (req, res) => {
    try {
      const parsed = insertProductSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid product data" });
      }
      const product = await storage.createProduct(parsed.data);
      res.json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Failed to create product" });
    }
  });

  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      const categories = await storage.getCategories();
      const categoryMap = new Map(categories.map(c => [c.id, c]));
      
      // Add category names to products for frontend use
      const productsWithCategories = products.map(p => ({
        ...p,
        categoryName: categoryMap.get(p.categoryId)?.name || "Unknown"
      }));
      
      res.json(productsWithCategories);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  app.get("/api/products/category/:categoryId", async (req, res) => {
    try {
      const products = await storage.getProductsByCategory(req.params.categoryId);
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.json([]);
      }
      const products = await storage.searchProducts(query);
      res.json(products);
    } catch (error) {
      console.error("Error searching products:", error);
      res.status(500).json({ error: "Failed to search products" });
    }
  });

  // Cart
  app.post("/api/cart", async (req, res) => {
    if (!req.session?.userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    try {
      const parsed = insertCartItemSchema.safeParse({
        ...req.body,
        userId: req.session.userId,
      });
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid cart item" });
      }
      const cartItem = await storage.addToCart(parsed.data);
      res.json(cartItem);
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ error: "Failed to add to cart" });
    }
  });

  app.get("/api/cart", async (req, res) => {
    if (!req.session?.userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    try {
      const cart = await storage.getCart(req.session.userId);
      res.json(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
      res.status(500).json({ error: "Failed to fetch cart" });
    }
  });

  app.patch("/api/cart/:id", async (req, res) => {
    try {
      const cartItem = await storage.updateCartQuantity(req.params.id, req.body.quantity);
      if (!cartItem) {
        return res.status(404).json({ error: "Cart item not found" });
      }
      res.json(cartItem);
    } catch (error) {
      console.error("Error updating cart:", error);
      res.status(500).json({ error: "Failed to update cart" });
    }
  });

  app.delete("/api/cart/:id", async (req, res) => {
    try {
      await storage.removeFromCart(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing from cart:", error);
      res.status(500).json({ error: "Failed to remove from cart" });
    }
  });

  // Orders
  app.post("/api/orders", async (req, res) => {
    if (!req.session?.userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    try {
      const parsed = insertOrderSchema.safeParse({
        ...req.body,
        userId: req.session.userId,
      });
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid order data" });
      }
      const order = await storage.createOrder(parsed.data);
      await storage.clearCart(req.session.userId);
      res.json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  app.get("/api/orders", async (req, res) => {
    if (!req.session?.userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    try {
      const orders = await storage.getUserOrders(req.session.userId);
      res.json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const order = await storage.getOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      console.error("Error fetching order:", error);
      res.status(500).json({ error: "Failed to fetch order" });
    }
  });

  // Reviews
  app.post("/api/reviews", async (req, res) => {
    try {
      const parsed = insertReviewSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid review data" });
      }
      const review = await storage.createReview(parsed.data);
      res.json(review);
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(500).json({ error: "Failed to create review" });
    }
  });

  app.get("/api/reviews/:productId", async (req, res) => {
    try {
      const reviews = await storage.getProductReviews(req.params.productId);
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  // Vehicles
  app.post("/api/vehicles", async (req, res) => {
    try {
      const parsed = insertVehicleSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid vehicle data" });
      }
      const vehicle = await storage.createVehicle(parsed.data);
      res.json(vehicle);
    } catch (error) {
      console.error("Error creating vehicle:", error);
      res.status(500).json({ error: "Failed to create vehicle" });
    }
  });

  app.get("/api/vehicles", async (req, res) => {
    try {
      const vehicles = await storage.getVehicles();
      res.json(vehicles);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      res.status(500).json({ error: "Failed to fetch vehicles" });
    }
  });

  app.get("/api/vehicles/:id", async (req, res) => {
    try {
      const vehicle = await storage.getVehicle(req.params.id);
      if (!vehicle) {
        return res.status(404).json({ error: "Vehicle not found" });
      }
      res.json(vehicle);
    } catch (error) {
      console.error("Error fetching vehicle:", error);
      res.status(500).json({ error: "Failed to fetch vehicle" });
    }
  });

  app.get("/api/vehicles/type/:type", async (req, res) => {
    try {
      const vehicles = await storage.getVehiclesByType(req.params.type);
      res.json(vehicles);
    } catch (error) {
      console.error("Error fetching vehicles by type:", error);
      res.status(500).json({ error: "Failed to fetch vehicles" });
    }
  });

  // Reservations
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

  app.get("/api/reservations", async (_req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({ error: "Failed to fetch reservations" });
    }
  });

  // Food Orders
  app.post("/api/food-orders", async (req, res) => {
    try {
      const parsed = insertFoodOrderSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid food order data" });
      }
      const order = await storage.createFoodOrder(parsed.data);
      res.json(order);
    } catch (error) {
      console.error("Error creating food order:", error);
      res.status(500).json({ error: "Failed to create food order" });
    }
  });

  app.get("/api/food-orders/:id", async (req, res) => {
    try {
      const order = await storage.getFoodOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Food order not found" });
      }
      res.json(order);
    } catch (error) {
      console.error("Error fetching food order:", error);
      res.status(500).json({ error: "Failed to fetch food order" });
    }
  });

  // Newsletter
  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid email address" });
      }
      const subscription = await storage.createNewsletter(parsed.data);
      res.json({ success: true, id: subscription.id });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

  // Banking
  const openAccountSchema = z.object({
    email: z.string().email(),
    accountType: z.enum(["checking", "savings", "money_market"]),
  });

  app.post("/api/bank/accounts", async (req, res) => {
    try {
      const parsed = openAccountSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid account data" });
      }
      // Generate a unique account number using cryptographically secure random bytes
      const { randomBytes } = await import("crypto");
      const accountNumber = `LUX${randomBytes(4).readUInt32BE(0).toString().slice(-8).padStart(8, "0")}`;
      const account = await storage.createBankAccount({
        ...parsed.data,
        accountNumber,
      });
      res.json(account);
    } catch (error) {
      console.error("Error creating bank account:", error);
      res.status(500).json({ error: "Failed to create bank account" });
    }
  });

  app.get("/api/bank/accounts/:email", async (req, res) => {
    try {
      const accounts = await storage.getBankAccountsByEmail(req.params.email);
      res.json(accounts);
    } catch (error) {
      console.error("Error fetching bank accounts:", error);
      res.status(500).json({ error: "Failed to fetch bank accounts" });
    }
  });

  app.get("/api/bank/accounts/:accountId/cards", async (req, res) => {
    try {
      const cards = await storage.getBankAccountCards(req.params.accountId);
      res.json(cards);
    } catch (error) {
      console.error("Error fetching bank cards:", error);
      res.status(500).json({ error: "Failed to fetch bank cards" });
    }
  });

  app.get("/api/bank/transactions/:accountId", async (req, res) => {
    try {
      const transactions = await storage.getAccountTransactions(req.params.accountId);
      res.json(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  });

  const createCardSchema = z.object({
    accountId: z.string().min(1),
    cardholderName: z.string().min(2),
    cardType: z.enum(["debit", "credit"]),
  });

  app.post("/api/bank/cards", async (req, res) => {
    try {
      const parsed = createCardSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid card data" });
      }
      // Verify the account exists
      const account = await storage.getBankAccountById(parsed.data.accountId);
      if (!account) {
        return res.status(404).json({ error: "Bank account not found" });
      }
      // Generate card details using cryptographically secure random values
      const { randomInt } = await import("crypto");
      const cardNumber = Array.from({ length: 4 }, () =>
        randomInt(0, 10000).toString().padStart(4, "0")
      ).join(" ");
      const now = new Date();
      const expiryDate = `${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getFullYear() + 5).slice(-2)}`;
      const cvv = randomInt(0, 1000).toString().padStart(3, "0");

      const card = await storage.createBankCard({
        ...parsed.data,
        cardNumber,
        expiryDate,
        cvv,
      });
      res.json(card);
    } catch (error) {
      console.error("Error creating bank card:", error);
      res.status(500).json({ error: "Failed to create bank card" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
