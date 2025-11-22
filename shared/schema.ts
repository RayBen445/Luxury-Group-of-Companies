import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

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
  items: z.string().min(1, "At least one item required"),
  deliveryType: z.enum(["pickup", "delivery"]),
  deliveryAddress: z.string().optional(),
  subtotal: z.number().positive(),
  deliveryFee: z.number().min(0),
  total: z.number().positive(),
  status: z.enum(["pending", "confirmed", "preparing", "ready", "delivered", "cancelled"]).default("pending"),
});

export type InsertFoodOrder = z.infer<typeof insertFoodOrderSchema>;
export type FoodOrder = typeof foodOrders.$inferSelect;

// Banking Models
export const bankAccounts = pgTable("bank_accounts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  accountType: text("account_type").notNull(), // checking, savings, money_market
  accountNumber: text("account_number").notNull().unique(),
  balance: numeric("balance", { precision: 12, scale: 2 }).notNull().default("0.00"),
  status: text("status").notNull().default("active"), // active, closed, suspended
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBankAccountSchema = createInsertSchema(bankAccounts).omit({
  id: true,
  accountNumber: true,
  balance: true,
  status: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  accountType: z.enum(["checking", "savings", "money_market"]),
});

export type InsertBankAccount = z.infer<typeof insertBankAccountSchema>;
export type BankAccount = typeof bankAccounts.$inferSelect;

export const bankCards = pgTable("bank_cards", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  accountId: varchar("account_id").notNull(),
  cardNumber: text("card_number").notNull().unique(),
  cardholderName: text("cardholder_name").notNull(),
  expiryDate: text("expiry_date").notNull(),
  cvv: text("cvv").notNull(),
  cardType: text("card_type").notNull(), // debit, credit
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBankCardSchema = createInsertSchema(bankCards).omit({
  id: true,
  cardNumber: true,
  cvv: true,
  expiryDate: true,
  status: true,
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
  type: text("type").notNull(), // deposit, withdrawal, transfer, purchase
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
