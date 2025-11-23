import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, numeric, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  phone: true,
  address: true,
}).extend({
  email: z.string().email().optional(),
  phone: z.string().min(10).optional(),
  address: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  description: text("description"),
  icon: text("icon"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1),
  description: z.string().optional(),
  icon: z.string().optional(),
});

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  categoryId: varchar("category_id").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  discountPrice: numeric("discount_price", { precision: 10, scale: 2 }),
  stock: integer("stock").notNull().default(0),
  image: text("image"),
  rating: numeric("rating", { precision: 3, scale: 2 }).default("0"),
  isOrganic: boolean("is_organic").default(false),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1),
  description: z.string().optional(),
  categoryId: z.string().min(1),
  price: z.number().positive(),
  discountPrice: z.number().positive().optional(),
  stock: z.number().min(0),
  image: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
  isOrganic: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export const cartItems = pgTable("cart_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  productId: varchar("product_id").notNull(),
  quantity: integer("quantity").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  userId: z.string().min(1),
  productId: z.string().min(1),
  quantity: z.number().min(1),
});

export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type CartItem = typeof cartItems.$inferSelect;

export const orders = pgTable("orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  items: text("items").notNull(), // JSON stringified
  subtotal: numeric("subtotal", { precision: 10, scale: 2 }).notNull(),
  deliveryFee: numeric("delivery_fee", { precision: 10, scale: 2 }).notNull().default("0"),
  tax: numeric("tax", { precision: 10, scale: 2 }).notNull().default("0"),
  total: numeric("total", { precision: 10, scale: 2 }).notNull(),
  status: text("status").notNull().default("pending"), // pending, confirmed, shipped, delivered, cancelled
  deliveryAddress: text("delivery_address").notNull(),
  phoneNumber: text("phone_number").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  userId: z.string().min(1),
  items: z.string().min(1),
  subtotal: z.number().positive(),
  deliveryFee: z.number().min(0).optional(),
  tax: z.number().min(0).optional(),
  total: z.number().positive(),
  status: z.enum(["pending", "confirmed", "shipped", "delivered", "cancelled"]),
  deliveryAddress: z.string().min(5),
  phoneNumber: z.string().min(10),
  notes: z.string().optional(),
});

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;

export const reviews = pgTable("reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  productId: varchar("product_id").notNull(),
  userId: varchar("user_id").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  createdAt: true,
}).extend({
  productId: z.string().min(1),
  userId: z.string().min(1),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;

// Restaurant Schemas
export const reservations = pgTable("reservations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  guests: integer("guests").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  tableType: text("table_type").notNull(),
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertReservationSchema = createInsertSchema(reservations).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  guests: z.number().min(1).max(20),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  tableType: z.enum(["indoor", "outdoor", "vip"]),
  specialRequests: z.string().optional(),
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Reservation = typeof reservations.$inferSelect;

export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  subscribedAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

export const foodOrders = pgTable("food_orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  items: text("items").notNull(),
  deliveryType: text("delivery_type").notNull(),
  deliveryAddress: text("delivery_address"),
  subtotal: integer("subtotal").notNull(),
  deliveryFee: integer("delivery_fee").notNull().default(0),
  total: integer("total").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertFoodOrderSchema = createInsertSchema(foodOrders).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number required"),
  items: z.string().min(1),
  deliveryType: z.enum(["pickup", "delivery"]),
  deliveryAddress: z.string().optional(),
  subtotal: z.number().min(0),
  deliveryFee: z.number().min(0),
  total: z.number().min(0),
});

export type InsertFoodOrder = z.infer<typeof insertFoodOrderSchema>;
export type FoodOrder = typeof foodOrders.$inferSelect;

// Banking Schemas
export const bankAccounts = pgTable("bank_accounts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  accountNumber: text("account_number").notNull().unique(),
  accountType: text("account_type").notNull(),
  balance: numeric("balance", { precision: 12, scale: 2 }).notNull().default("0"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBankAccountSchema = createInsertSchema(bankAccounts).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email(),
  accountType: z.enum(["checking", "savings", "money_market"]),
});

export type InsertBankAccount = z.infer<typeof insertBankAccountSchema>;
export type BankAccount = typeof bankAccounts.$inferSelect;

export const bankCards = pgTable("bank_cards", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  accountId: varchar("account_id").notNull(),
  cardNumber: text("card_number").notNull(),
  cardholderName: text("cardholder_name").notNull(),
  expiryDate: text("expiry_date").notNull(),
  cvv: text("cvv").notNull(),
  cardType: text("card_type").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBankCardSchema = createInsertSchema(bankCards).omit({
  id: true,
  createdAt: true,
}).extend({
  accountId: z.string().min(1),
  cardholderName: z.string().min(2),
  cardType: z.enum(["debit", "credit"]),
});

export type InsertBankCard = z.infer<typeof insertBankCardSchema>;
export type BankCard = typeof bankCards.$inferSelect;

export const transactions = pgTable("transactions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  accountId: varchar("account_id").notNull(),
  type: text("type").notNull(),
  amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
  description: text("description").notNull(),
  balanceAfter: numeric("balance_after", { precision: 12, scale: 2 }).notNull(),
  status: text("status").notNull().default("completed"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertTransactionSchema = createInsertSchema(transactions).omit({
  id: true,
  balanceAfter: true,
  status: true,
  createdAt: true,
}).extend({
  accountId: z.string().min(1),
  type: z.enum(["deposit", "withdrawal", "transfer", "purchase"]),
  amount: z.number().positive("Amount must be positive"),
  description: z.string().min(1, "Description required"),
});

export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type Transaction = typeof transactions.$inferSelect;

// Consultation Schemas
export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  property: text("property").notNull(),
  serviceType: text("service_type").notNull(),
  preferredDate: text("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  property: z.string().min(1, "Property is required"),
  serviceType: z.string().min(1, "Service type is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  message: z.string().optional(),
});

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;

// Car Company Schemas
export const vehicles = pgTable("vehicles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  year: integer("year").notNull(),
  type: text("type").notNull(),
  price: numeric("price", { precision: 12, scale: 2 }).notNull(),
  horsepower: integer("horsepower").notNull(),
  acceleration: numeric("acceleration", { precision: 4, scale: 2 }).notNull(),
  transmission: text("transmission").notNull(),
  range: text("range"),
  mpg: text("mpg"),
  isElectric: boolean("is_electric").default(false),
  isNew: boolean("is_new").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertVehicleSchema = createInsertSchema(vehicles).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1),
  year: z.number().min(2000),
  type: z.enum(["sedan", "suv", "sports", "electric", "luxury"]),
  price: z.number().positive(),
  horsepower: z.number().positive(),
  acceleration: z.number().positive(),
  transmission: z.string().min(1),
  range: z.string().optional(),
  mpg: z.string().optional(),
});

export type InsertVehicle = z.infer<typeof insertVehicleSchema>;
export type Vehicle = typeof vehicles.$inferSelect;
