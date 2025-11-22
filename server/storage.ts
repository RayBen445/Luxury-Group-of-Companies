import { type User, type InsertUser, type Reservation, type InsertReservation, type Newsletter, type InsertNewsletter, type FoodOrder, type InsertFoodOrder } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscribers(): Promise<Newsletter[]>;
  createFoodOrder(order: InsertFoodOrder): Promise<FoodOrder>;
  getFoodOrders(): Promise<FoodOrder[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private reservations: Map<string, Reservation>;
  private newsletters: Map<string, Newsletter>;
  private foodOrders: Map<string, FoodOrder>;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.newsletters = new Map();
    this.foodOrders = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = randomUUID();
    const reservation: Reservation = {
      ...insertReservation,
      id,
      createdAt: new Date(),
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async createFoodOrder(insertOrder: InsertFoodOrder): Promise<FoodOrder> {
    const id = randomUUID();
    const order: FoodOrder = {
      ...insertOrder,
      id,
      createdAt: new Date(),
    };
    this.foodOrders.set(id, order);
    return order;
  }

  async getFoodOrders(): Promise<FoodOrder[]> {
    return Array.from(this.foodOrders.values());
  }
}

export const storage = new MemStorage();
