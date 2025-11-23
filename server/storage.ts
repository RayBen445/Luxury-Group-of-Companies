import { 
  type User, 
  type InsertUser, 
  type Reservation, 
  type InsertReservation, 
  type Newsletter, 
  type InsertNewsletter, 
  type FoodOrder, 
  type InsertFoodOrder, 
  type BankAccount, 
  type InsertBankAccount, 
  type BankCard, 
  type InsertBankCard, 
  type Transaction, 
  type InsertTransaction 
} from "@shared/schema";

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
  createBankAccount(account: InsertBankAccount): Promise<BankAccount>;
  getBankAccountsByEmail(email: string): Promise<BankAccount[]>;
  getBankAccount(id: string): Promise<BankAccount | undefined>;
  updateBankAccountBalance(id: string, balance: number): Promise<BankAccount | undefined>;
  createBankCard(card: InsertBankCard): Promise<BankCard>;
  getBankCardsByAccountId(accountId: string): Promise<BankCard[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  getTransactionsByAccountId(accountId: string): Promise<Transaction[]>;
}

export class MemStorage implements IStorage {
  private users = new Map<string, User>();
  private reservations = new Map<string, Reservation>();
  private newsletters = new Map<string, Newsletter>();
  private foodOrders = new Map<string, FoodOrder>();
  private bankAccounts = new Map<string, BankAccount>();
  private bankCards = new Map<string, BankCard>();
  private transactions = new Map<string, Transaction>();

  /** Normalize undefined → null for schema compatibility */
  private normalize<T>(v: T | null | undefined): T | null {
    return v ?? null;
  }

  async getUser(id: string) {
    return this.users.get(id);
  }

  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createReservation(data: InsertReservation): Promise<Reservation> {
    const id = randomUUID();
    const reservation: Reservation = {
      ...data,
      id,
      createdAt: new Date(),
      specialRequests: this.normalize(data.specialRequests)
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations() {
    return Array.from(this.reservations.values());
  }

  async subscribeNewsletter(data: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = {
      ...data,
      id,
      subscribedAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscribers() {
    return Array.from(this.newsletters.values());
  }

  async createFoodOrder(data: InsertFoodOrder): Promise<FoodOrder> {
    const id = randomUUID();
    const order: FoodOrder = {
      ...data,
      id,
      createdAt: new Date(),
      deliveryAddress: this.normalize(data.deliveryAddress)
    };
    this.foodOrders.set(id, order);
    return order;
  }

  async getFoodOrders() {
    return Array.from(this.foodOrders.values());
  }

  async createBankAccount(data: InsertBankAccount): Promise<BankAccount> {
    const id = randomUUID();
    const account: BankAccount = {
      ...data,
      id,
      accountNumber: this.generateAccountNumber(),
      balance: "0.00",
      status: "active",
      createdAt: new Date()
    };
    this.bankAccounts.set(id, account);
    return account;
  }

  async getBankAccountsByEmail(email: string) {
    return Array.from(this.bankAccounts.values()).filter(a => a.email === email);
  }

  async getBankAccount(id: string) {
    return this.bankAccounts.get(id);
  }

  async updateBankAccountBalance(id: string, balance: number) {
    const account = this.bankAccounts.get(id);
    if (!account) return undefined;

    const updated: BankAccount = {
      ...account,
      balance: balance.toFixed(2)
    };

    this.bankAccounts.set(id, updated);
    return updated;
  }

  async createBankCard(data: InsertBankCard): Promise<BankCard> {
    const id = randomUUID();
    const card: BankCard = {
      ...data,
      id,
      status: "active",
      cardNumber: this.generateCardNumber(),
      cvv: this.generateCVV(),
      expiryDate: this.generateExpiryDate(),
      createdAt: new Date()
    };
    this.bankCards.set(id, card);
    return card;
  }

  async getBankCardsByAccountId(accountId: string) {
    return Array.from(this.bankCards.values()).filter(c => c.accountId === accountId);
  }

  async createTransaction(data: InsertTransaction): Promise<Transaction> {
    const id = randomUUID();
    const account = await this.getBankAccount(data.accountId);

    const amount = parseFloat(data.amount.toString());
    const previous = account ? parseFloat(account.balance) : 0;
    const newBalance = (previous + amount).toFixed(2);

    if (account) {
      await this.updateBankAccountBalance(data.accountId, parseFloat(newBalance));
    }

    const transaction: Transaction = {
      ...data,
      id,
      amount: amount.toFixed(2),
      balanceAfter: newBalance,
      status: "completed",
      createdAt: new Date()
    };

    this.transactions.set(id, transaction);
    return transaction;
  }

  async getTransactionsByAccountId(accountId: string) {
    return Array.from(this.transactions.values())
      .filter(txn => txn.accountId === accountId)
      .sort((a, b) => {
        const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return bTime - aTime;
      });
  }

  private generateAccountNumber() {
    return `LB${Math.random().toString().slice(2, 11).padStart(9, "0")}`;
  }

  private generateCardNumber() {
    return "4532" + Math.random().toString().slice(2, 14).padStart(12, "0");
  }

  private generateCVV() {
    return Math.random().toString().slice(2, 5).padStart(3, "0");
  }

  private generateExpiryDate() {
    const now = new Date();
    const year = (now.getFullYear() + 5) % 100;
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${month}/${year}`;
  }
}

export const storage = new MemStorage();  

