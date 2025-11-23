import { type User, type InsertUser, type Reservation, type InsertReservation, type Newsletter, type InsertNewsletter, type FoodOrder, type InsertFoodOrder, type BankAccount, type InsertBankAccount, type BankCard, type InsertBankCard, type Transaction, type InsertTransaction } from "@shared/schema";
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
  // Banking methods
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
  private users: Map<string, User>;
  private reservations: Map<string, Reservation>;
  private newsletters: Map<string, Newsletter>;
  private foodOrders: Map<string, FoodOrder>;
  private bankAccounts: Map<string, BankAccount>;
  private bankCards: Map<string, BankCard>;
  private transactions: Map<string, Transaction>;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.newsletters = new Map();
    this.foodOrders = new Map();
    this.bankAccounts = new Map();
    this.bankCards = new Map();
    this.transactions = new Map();
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
      specialRequests: insertReservation.specialRequests ?? null,
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
      deliveryAddress: insertOrder.deliveryAddress ?? null,
      createdAt: new Date(),
    };
    this.foodOrders.set(id, order);
    return order;
  }

  async getFoodOrders(): Promise<FoodOrder[]> {
    return Array.from(this.foodOrders.values());
  }

  async createBankAccount(insertAccount: InsertBankAccount): Promise<BankAccount> {
    const id = randomUUID();
    const accountNumber = this.generateAccountNumber();
    const account: BankAccount = {
      ...insertAccount,
      id,
      accountNumber,
      balance: "0.00",
      status: "active",
      createdAt: new Date(),
    };
    this.bankAccounts.set(id, account);
    return account;
  }

  async getBankAccountsByEmail(email: string): Promise<BankAccount[]> {
    return Array.from(this.bankAccounts.values()).filter(
      (account) => account.email === email
    );
  }

  async getBankAccount(id: string): Promise<BankAccount | undefined> {
    return this.bankAccounts.get(id);
  }

  async updateBankAccountBalance(id: string, balance: number): Promise<BankAccount | undefined> {
    const account = this.bankAccounts.get(id);
    if (!account) return undefined;
    const updated = { ...account, balance: balance.toString() };
    this.bankAccounts.set(id, updated);
    return updated;
  }

  async createBankCard(insertCard: InsertBankCard): Promise<BankCard> {
    const id = randomUUID();
    const cardNumber = this.generateCardNumber();
    const cvv = this.generateCVV();
    const expiryDate = this.generateExpiryDate();
    
    const card: BankCard = {
      ...insertCard,
      id,
      cardNumber,
      cvv,
      expiryDate,
      status: "active",
      createdAt: new Date(),
    };
    this.bankCards.set(id, card);
    return card;
  }

  async getBankCardsByAccountId(accountId: string): Promise<BankCard[]> {
    return Array.from(this.bankCards.values()).filter(
      (card) => card.accountId === accountId
    );
  }

  async createTransaction(insertTransaction: InsertTransaction): Promise<Transaction> {
    const id = randomUUID();
    const account = await this.getBankAccount(insertTransaction.accountId);
    const balanceAfter = account ? (parseFloat(account.balance) + parseFloat(insertTransaction.amount.toString())).toFixed(2) : "0.00";
    
    if (account) {
      await this.updateBankAccountBalance(insertTransaction.accountId, parseFloat(balanceAfter));
    }

    const transaction: Transaction = {
      ...insertTransaction,
      id,
      amount: insertTransaction.amount.toString(),
      balanceAfter,
      status: "completed",
      createdAt: new Date(),
    };
    this.transactions.set(id, transaction);
    return transaction;
  }

  async getTransactionsByAccountId(accountId: string): Promise<Transaction[]> {
    return Array.from(this.transactions.values())
      .filter((txn) => txn.accountId === accountId)
      .sort((a, b) => {
        const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return bTime - aTime;
      });
  }

  private generateAccountNumber(): string {
    return `LB${Math.random().toString().slice(2, 11).padStart(9, "0")}`;
  }

  private generateCardNumber(): string {
    const prefix = "4532"; // Visa-like
    const random = Math.random().toString().slice(2, 14).padStart(12, "0");
    return prefix + random;
  }

  private generateCVV(): string {
    return Math.random().toString().slice(2, 5).padStart(3, "0");
  }

  private generateExpiryDate(): string {
    const now = new Date();
    const year = (now.getFullYear() + 5) % 100; // 5 years validity
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    return `${month}/${year}`;
  }
}

export const storage = new MemStorage();
