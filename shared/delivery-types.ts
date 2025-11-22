export type DeliveryType = "pickup" | "delivery";
export type DeliveryLocation = "home" | "office" | "event";

export interface FoodOrder {
  id: string;
  items: OrderItem[];
  deliveryType: DeliveryType;
  deliveryLocation?: DeliveryLocation;
  deliveryAddress?: string;
  specialInstructions?: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: "pending" | "confirmed" | "preparing" | "ready" | "delivered" | "cancelled";
  createdAt: Date;
}

export interface OrderItem {
  foodName: string;
  quantity: number;
  price: number;
  specialRequests?: string;
}

export const deliveryFees: Record<DeliveryType, number> = {
  pickup: 0,
  delivery: 25,
};
