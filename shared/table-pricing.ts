export interface TableType {
  id: string;
  name: string;
  description: string;
  pricePerPerson: number;
  maxGuests: number;
  features: string[];
}

export const tablePricing: TableType[] = [
  {
    id: "standard",
    name: "Standard Table",
    description: "Classic dining experience in our main dining room",
    pricePerPerson: 0,
    maxGuests: 8,
    features: [
      "Premium seating",
      "Full menu access",
      "Standard service",
    ],
  },
  {
    id: "vip",
    name: "VIP Table",
    description: "Elevated experience with premium service",
    pricePerPerson: 50,
    maxGuests: 8,
    features: [
      "Private corner seating",
      "Full menu + specials access",
      "Dedicated server",
      "Priority reservations",
      "Complimentary appetizer",
      "Wine list consultation",
    ],
  },
  {
    id: "premium",
    name: "Premium Table",
    description: "Exclusive premium dining experience",
    pricePerPerson: 100,
    maxGuests: 8,
    features: [
      "Premium location seating",
      "Full menu + chef specials",
      "Personal sommelier",
      "Priority everything",
      "Complimentary cocktails",
      "Personalized menu options",
      "Exclusive wine selection",
    ],
  },
  {
    id: "luxury",
    name: "Luxury Suite",
    description: "Our most exclusive dining experience",
    pricePerPerson: 150,
    maxGuests: 12,
    features: [
      "Private dining suite",
      "Tasting menu only",
      "Personal chef consultation",
      "Sommelier service",
      "Complimentary premium drinks",
      "Special occasion setup",
      "Valet parking included",
      "Personalized service staff",
    ],
  },
  {
    id: "private-room",
    name: "Private Dining Room",
    description: "Exclusive private room for groups",
    pricePerPerson: 120,
    maxGuests: 30,
    features: [
      "Completely private space",
      "Customizable menu",
      "Dedicated staff",
      "Audio/visual setup available",
      "Special event coordination",
      "VIP treatment for all",
    ],
  },
  {
    id: "chef-table",
    name: "Chef's Table",
    description: "Watch our chefs create culinary masterpieces",
    pricePerPerson: 200,
    maxGuests: 10,
    features: [
      "Seated at chef's counter",
      "Multi-course tasting menu",
      "Interactive experience",
      "Chef interaction",
      "Premium beverage pairings",
      "Exclusive menu items",
      "Behind-the-scenes access",
    ],
  },
];
