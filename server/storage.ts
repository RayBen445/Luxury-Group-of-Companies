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
  type Vehicle,
  type InsertVehicle,
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

  createVehicle(vehicle: InsertVehicle): Promise<Vehicle>;
  getVehicles(): Promise<Vehicle[]>;
  getVehicle(id: string): Promise<Vehicle | undefined>;
  getVehiclesByType(type: string): Promise<Vehicle[]>;
}

export class MemStorage implements IStorage {
  private users = new Map<string, User>();
  private categories = new Map<string, Category>();
  private products = new Map<string, Product>();
  private cartItems = new Map<string, CartItem>();
  private orders = new Map<string, Order>();
  private reviews = new Map<string, Review>();
  private vehicles = new Map<string, Vehicle>();

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
    ];

    for (const cat of defaultCategories) {
      const id = randomUUID();
      this.categories.set(id, {
        id,
        ...cat,
        createdAt: new Date(),
      });
    }

    // Create 1000 products
    const categoryIds = Array.from(this.categories.values());
    const productTemplates = [
      { name: "Organic Apples", category: 0, price: 2.99, stock: 100 },
      { name: "Fresh Carrots", category: 0, price: 1.99, stock: 150 },
      { name: "Whole Milk", category: 1, price: 3.49, stock: 80 },
      { name: "Free Range Eggs", category: 1, price: 4.99, stock: 120 },
      { name: "Prime Beef", category: 2, price: 12.99, stock: 50 },
      { name: "Fresh Salmon", category: 2, price: 10.99, stock: 40 },
      { name: "Sourdough Bread", category: 3, price: 3.99, stock: 60 },
      { name: "Chocolate Cookies", category: 5, price: 2.49, stock: 200 },
      { name: "Orange Juice", category: 4, price: 3.99, stock: 100 },
      { name: "Potato Chips", category: 5, price: 1.99, stock: 300 },
      { name: "Frozen Pizza", category: 6, price: 8.99, stock: 75 },
      { name: "Shampoo", category: 7, price: 6.99, stock: 120 },
      { name: "Paper Towels", category: 8, price: 4.49, stock: 200 },
      { name: "Broccoli", category: 0, price: 2.49, stock: 90 },
      { name: "Bananas", category: 0, price: 1.49, stock: 180 },
      { name: "Greek Yogurt", category: 1, price: 5.99, stock: 110 },
      { name: "Cheddar Cheese", category: 1, price: 7.99, stock: 60 },
      { name: "Ground Beef", category: 2, price: 9.99, stock: 45 },
      { name: "Chicken Breast", category: 2, price: 11.99, stock: 55 },
      { name: "Croissants", category: 3, price: 4.49, stock: 70 },
      { name: "Granola Bars", category: 5, price: 1.99, stock: 250 },
      { name: "Sparkling Water", category: 4, price: 2.99, stock: 150 },
      { name: "Almond Milk", category: 1, price: 3.79, stock: 95 },
      { name: "Pasta", category: 5, price: 1.29, stock: 300 },
      { name: "Olive Oil", category: 5, price: 9.99, stock: 40 },
      { name: "Tomato Sauce", category: 5, price: 2.49, stock: 150 },
      { name: "Peanut Butter", category: 5, price: 4.99, stock: 120 },
      { name: "Honey", category: 5, price: 7.99, stock: 60 },
      { name: "Rice", category: 5, price: 3.49, stock: 100 },
      { name: "Quinoa", category: 5, price: 8.99, stock: 50 },
    ];

    let productCount = 0;
    for (let batch = 0; batch < 34; batch++) {
      for (let i = 0; i < productTemplates.length; i++) {
        if (productCount >= 1000) break;
        
        const template = productTemplates[i];
        const id = randomUUID();
        const variantName = batch > 0 ? `${template.name} (Variant ${batch + 1})` : template.name;
        const price = (template.price + (Math.random() * 2 - 1)).toFixed(2);
        
        this.products.set(id, {
          id,
          name: variantName,
          description: `Premium quality ${variantName}`,
          categoryId: categoryIds[template.category].id,
          price: price,
          discountPrice: null,
          stock: Math.floor(template.stock * (0.8 + Math.random() * 0.4)),
          image: null,
          rating: (4 + Math.random()).toFixed(1),
          isOrganic: Math.random() > 0.6,
          isFeatured: productCount < 8,
          createdAt: new Date(),
        });
        productCount++;
      }
      if (productCount >= 1000) break;
    }

    // Create sample vehicles with different grades
    const sampleVehicles = [
      // Classic Luxury Collection (2024)
      { name: "Royale Phantom", year: 2024, type: "sedan", price: "450000", horsepower: 563, acceleration: 5.1, transmission: "8-Speed Automatic", isElectric: false, isNew: true, exteriorImage: "rolls_royce_phantom_luxury_sedan.png", interiorImage: "phantom_interior_premium_cabin.png", grade: "Platinum" },
      { name: "Royale Spectre", year: 2024, type: "luxury", price: "350000", horsepower: 536, acceleration: 5.3, transmission: "8-Speed Automatic", isElectric: false, isNew: true, exteriorImage: "rolls_royce_phantom_luxury_sedan.png", interiorImage: "phantom_interior_premium_cabin.png", grade: "Gold" },
      { name: "Royale Ghost", year: 2024, type: "sedan", price: "320000", horsepower: 563, acceleration: 5.0, transmission: "9-Speed Automatic", isElectric: false, isNew: true, exteriorImage: "rolls_royce_phantom_luxury_sedan.png", interiorImage: "phantom_interior_premium_cabin.png", grade: "Silver" },
      { name: "Royale Cullinan", year: 2024, type: "suv", price: "550000", horsepower: 563, acceleration: 5.2, transmission: "8-Speed Automatic", isElectric: false, isNew: true, exteriorImage: "bentley_luxury_suv_exterior.png", interiorImage: "bentley_suv_luxury_interior.png", grade: "Platinum" },
      { name: "Royale Wraith", year: 2024, type: "sports", price: "420000", horsepower: 624, acceleration: 4.8, transmission: "8-Speed Automatic", isElectric: false, isNew: true, exteriorImage: "mercedes_amg_sports_exterior.png", interiorImage: "amg_sports_interior_cockpit.png", grade: "Platinum" },
      { name: "Royale EV Supreme", year: 2024, type: "electric", price: "380000", horsepower: 500, acceleration: 4.9, range: "500 miles", transmission: "1-Speed Direct Drive", isElectric: true, isNew: true, exteriorImage: "tesla_model_s_electric_car.png", interiorImage: "tesla_model_s_interior_tech.png", grade: "Diamond" },
      { name: "Royale Dawn", year: 2024, type: "luxury", price: "280000", horsepower: 536, acceleration: 5.5, transmission: "8-Speed Automatic", isElectric: false, isNew: true, exteriorImage: "bentley_luxury_suv_exterior.png", interiorImage: "bentley_suv_luxury_interior.png", grade: "Gold" },
      { name: "Royale Black Badge", year: 2024, type: "sports", price: "380000", horsepower: 563, acceleration: 3.9, transmission: "8-Speed Automatic", isElectric: false, isNew: true, exteriorImage: "mercedes_amg_sports_exterior.png", interiorImage: "amg_sports_interior_cockpit.png", grade: "Gold" },
      // Futuristic Collection (2025-2039)
      { name: "Royale Vision 2025", year: 2025, type: "electric", price: "520000", horsepower: 750, acceleration: 3.2, range: "600 miles", transmission: "1-Speed Direct Drive", isElectric: true, isNew: true, exteriorImage: "2025_electric_luxury_sedan.png", interiorImage: "2025_sedan_interior_futuristic.png", grade: "Diamond" },
      { name: "Royale Autonomous 2026", year: 2026, type: "sedan", price: "680000", horsepower: 600, acceleration: 3.8, transmission: "Autonomous AI", isElectric: true, isNew: true, exteriorImage: "2026_autonomous_luxury.png", interiorImage: "2026_autonomous_interior.png", grade: "Platinum" },
      { name: "Royale Eco Hybrid 2027", year: 2027, type: "suv", price: "580000", horsepower: 520, acceleration: 4.1, range: "450 miles", transmission: "Hybrid Automatic", isElectric: true, isNew: true, exteriorImage: "2027_hybrid_luxury_suv.png", interiorImage: "2027_suv_interior_eco-luxury.png", grade: "Gold" },
      { name: "Royale Hyper 2028", year: 2028, type: "sports", price: "2500000", horsepower: 1500, acceleration: 2.0, range: "300 miles", transmission: "Direct Drive", isElectric: true, isNew: true, exteriorImage: "2028_electric_hypercar.png", interiorImage: "2028_hypercar_cockpit.png", grade: "Diamond" },
      { name: "Royale Lounge 2029", year: 2029, type: "sedan", price: "890000", horsepower: 400, acceleration: 5.5, transmission: "Autonomous AI", isElectric: true, isNew: true, exteriorImage: "2029_autonomous_lounge.png", interiorImage: "2029_lounge_interior_relax.png", grade: "Platinum" },
      { name: "Royale Grand Tourer 2030", year: 2030, type: "luxury", price: "720000", horsepower: 650, acceleration: 3.9, range: "700 miles", transmission: "Intelligent Drive", isElectric: true, isNew: true, exteriorImage: "2030_electric_tourer.png", interiorImage: "2030_tourer_cabin_luxury.png", grade: "Diamond" },
      { name: "Royale Convertible 2031", year: 2031, type: "sports", price: "850000", horsepower: 800, acceleration: 3.1, range: "550 miles", transmission: "Direct Drive", isElectric: true, isNew: true, exteriorImage: "2031_electric_convertible.png", interiorImage: "2031_convertible_interior.png", grade: "Diamond" },
      { name: "Royale Shuttle 2032", year: 2032, type: "suv", price: "1200000", horsepower: 500, acceleration: 4.2, transmission: "Autonomous AI", isElectric: true, isNew: true, exteriorImage: "2032_autonomous_shuttle.png", interiorImage: "2032_shuttle_cabin_design.png", grade: "Platinum" },
      { name: "Royale Ultra Luxury 2033", year: 2033, type: "sedan", price: "1500000", horsepower: 700, acceleration: 3.5, range: "800 miles", transmission: "Quantum Drive", isElectric: true, isNew: true, exteriorImage: "2033_ultra-luxury_sedan.png", interiorImage: "2033_luxury_interior_premium.png", grade: "Diamond" },
      { name: "Royale Future Legend 2034+", year: 2039, type: "electric", price: "3000000", horsepower: 2000, acceleration: 1.8, range: "1000 miles", transmission: "Quantum AI Drive", isElectric: true, isNew: true, exteriorImage: "2034-2039_future_luxury.png", interiorImage: "2034-2039_future_interior.png", grade: "Diamond" },
    ];

    for (const v of sampleVehicles) {
      const id = randomUUID();
      this.vehicles.set(id, {
        id,
        name: v.name,
        year: v.year,
        type: v.type,
        price: v.price,
        horsepower: v.horsepower,
        acceleration: String(v.acceleration),
        transmission: v.transmission,
        range: (v as any).range || null,
        mpg: null,
        isElectric: v.isElectric,
        isNew: v.isNew,
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
      username: insertUser.username,
      password: hashedPassword,
      email: insertUser.email || null,
      phone: insertUser.phone || null,
      address: insertUser.address || null,
      id,
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
      name: data.name,
      description: data.description || null,
      icon: data.icon || null,
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
      name: data.name,
      description: data.description || null,
      categoryId: data.categoryId,
      price: String(data.price),
      discountPrice: data.discountPrice ? String(data.discountPrice) : null,
      stock: data.stock,
      image: data.image || null,
      rating: data.rating ? String(data.rating) : null,
      isOrganic: data.isOrganic || false,
      isFeatured: data.isFeatured || false,
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
      userId: data.userId,
      items: data.items,
      subtotal: String(data.subtotal),
      deliveryFee: String(data.deliveryFee),
      tax: String(data.tax),
      total: String(data.total),
      deliveryAddress: data.deliveryAddress,
      phoneNumber: data.phoneNumber,
      status: data.status,
      notes: data.notes || null,
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
      productId: data.productId,
      userId: data.userId,
      rating: data.rating,
      comment: data.comment || null,
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

  async createVehicle(data: InsertVehicle): Promise<Vehicle> {
    const id = randomUUID();
    const vehicle: Vehicle = {
      id,
      name: data.name,
      year: data.year,
      type: data.type,
      price: String(data.price),
      horsepower: data.horsepower,
      acceleration: String(data.acceleration),
      transmission: data.transmission,
      range: data.range || null,
      mpg: data.mpg || null,
      isElectric: data.isElectric || false,
      isNew: data.isNew || true,
      createdAt: new Date(),
    };
    this.vehicles.set(id, vehicle);
    return vehicle;
  }

  async getVehicles(): Promise<Vehicle[]> {
    return Array.from(this.vehicles.values());
  }

  async getVehicle(id: string): Promise<Vehicle | undefined> {
    return this.vehicles.get(id);
  }

  async getVehiclesByType(type: string): Promise<Vehicle[]> {
    return Array.from(this.vehicles.values())
      .filter((v) => v.type === type);
  }
}

export const storage = new MemStorage();
