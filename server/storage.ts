import {
  type User,
  type InsertUser,
  type Category,
  type InsertCategory,
  type Product,
  type InsertProduct,
  type CartItem,
  type InsertCartItem,
  type Order,
  type InsertOrder,
  type Review,
  type InsertReview,
} from "@shared/schema";

import { randomUUID } from "crypto";
import bcryptjs from "bcryptjs";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  verifyUserPassword(username: string, password: string): Promise<User | null>;

  createCategory(category: InsertCategory): Promise<Category>;
  getCategories(): Promise<Category[]>;

  createProduct(product: InsertProduct): Promise<Product>;
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductsByCategory(categoryId: string): Promise<Product[]>;
  searchProducts(query: string): Promise<Product[]>;

  addToCart(item: InsertCartItem): Promise<CartItem>;
  getCart(userId: string): Promise<CartItem[]>;
  updateCartQuantity(cartItemId: string, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(cartItemId: string): Promise<void>;
  clearCart(userId: string): Promise<void>;

  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: string): Promise<Order | undefined>;
  getUserOrders(userId: string): Promise<Order[]>;

  createReview(review: InsertReview): Promise<Review>;
  getProductReviews(productId: string): Promise<Review[]>;
}

export class MemStorage implements IStorage {
  private users = new Map<string, User>();
  private categories = new Map<string, Category>();
  private products = new Map<string, Product>();
  private cartItems = new Map<string, CartItem>();
  private orders = new Map<string, Order>();
  private reviews = new Map<string, Review>();

  constructor() {
    this.initializeDefaultData();
  }

  private async initializeDefaultData() {
    // Create default categories
    const defaultCategories = [
      { name: "Fruits & Vegetables", description: "Fresh organic produce", icon: "🥗" },
      { name: "Dairy & Eggs", description: "Fresh dairy products", icon: "🥛" },
      { name: "Meat & Seafood", description: "Premium quality meats", icon: "🍖" },
      { name: "Bakery", description: "Fresh baked goods", icon: "🥖" },
      { name: "Beverages", description: "Drinks and juices", icon: "🥤" },
      { name: "Snacks", description: "Chips and snacks", icon: "🍿" },
      { name: "Frozen Foods", description: "Frozen meals", icon: "❄️" },
      { name: "Health & Beauty", description: "Personal care", icon: "💆" },
      { name: "Household", description: "Cleaning supplies", icon: "🧹" },
      { name: "Electronics", description: "Home electronics", icon: "📱" },
    ];

    for (const cat of defaultCategories) {
      const id = randomUUID();
      this.categories.set(id, {
        id,
        ...cat,
        createdAt: new Date(),
      });
    }

    // Create sample products
    const categoryIds = Array.from(this.categories.values());
    const sampleProducts = [
      { name: "Organic Apples", category: 0, price: "2.99", stock: 100 },
      { name: "Fresh Carrots", category: 0, price: "1.99", stock: 150 },
      { name: "Whole Milk", category: 1, price: "3.49", stock: 80 },
      { name: "Free Range Eggs", category: 1, price: "4.99", stock: 120 },
      { name: "Prime Beef", category: 2, price: "12.99", stock: 50 },
      { name: "Fresh Salmon", category: 2, price: "10.99", stock: 40 },
      { name: "Sourdough Bread", category: 3, price: "3.99", stock: 60 },
      { name: "Chocolate Cookies", category: 6, price: "2.49", stock: 200 },
      { name: "Orange Juice", category: 4, price: "3.99", stock: 100 },
      { name: "Potato Chips", category: 5, price: "1.99", stock: 300 },
    ];

    for (let i = 0; i < sampleProducts.length; i++) {
      const p = sampleProducts[i];
      const id = randomUUID();
      this.products.set(id, {
        id,
        name: p.name,
        description: `Premium quality ${p.name}`,
        categoryId: categoryIds[p.category].id,
        price: p.price,
        discountPrice: undefined,
        stock: p.stock,
        image: undefined,
        rating: "4.5",
        isOrganic: Math.random() > 0.5,
        isFeatured: i < 5,
        createdAt: new Date(),
      });
    }
  }

  async getUser(id: string) {
    return this.users.get(id);
  }

  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find((u) => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const hashedPassword = await bcryptjs.hash(insertUser.password, 10);
    const user: User = {
      ...insertUser,
      id,
      password: hashedPassword,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async verifyUserPassword(username: string, password: string): Promise<User | null> {
    const user = await this.getUserByUsername(username);
    if (!user) return null;
    const isValid = await bcryptjs.compare(password, user.password);
    return isValid ? user : null;
  }

  async createCategory(data: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = {
      id,
      ...data,
      createdAt: new Date(),
    };
    this.categories.set(id, category);
    return category;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async createProduct(data: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = {
      id,
      ...data,
      createdAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter((p) => p.categoryId === categoryId);
  }

  async searchProducts(query: string): Promise<Product[]> {
    const lower = query.toLowerCase();
    return Array.from(this.products.values()).filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.description?.toLowerCase().includes(lower)
    );
  }

  async addToCart(item: InsertCartItem): Promise<CartItem> {
    const existing = Array.from(this.cartItems.values()).find(
      (c) => c.userId === item.userId && c.productId === item.productId
    );

    if (existing) {
      existing.quantity += item.quantity;
      existing.updatedAt = new Date();
      return existing;
    }

    const id = randomUUID();
    const cartItem: CartItem = {
      id,
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.cartItems.set(id, cartItem);
    return cartItem;
  }

  async getCart(userId: string): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter((c) => c.userId === userId);
  }

  async updateCartQuantity(cartItemId: string, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(cartItemId);
    if (item) {
      item.quantity = quantity;
      item.updatedAt = new Date();
    }
    return item;
  }

  async removeFromCart(cartItemId: string): Promise<void> {
    this.cartItems.delete(cartItemId);
  }

  async clearCart(userId: string): Promise<void> {
    const toDelete = Array.from(this.cartItems.entries())
      .filter(([_, c]) => c.userId === userId)
      .map(([id]) => id);
    toDelete.forEach((id) => this.cartItems.delete(id));
  }

  async createOrder(data: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const order: Order = {
      id,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    return Array.from(this.orders.values())
      .filter((o) => o.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createReview(data: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = {
      id,
      ...data,
      createdAt: new Date(),
    };
    this.reviews.set(id, review);
    return review;
  }

  async getProductReviews(productId: string): Promise<Review[]> {
    return Array.from(this.reviews.values())
      .filter((r) => r.productId === productId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}

export const storage = new MemStorage();
