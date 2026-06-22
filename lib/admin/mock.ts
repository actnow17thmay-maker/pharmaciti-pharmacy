import { products, popularCategories } from "@/lib/products";
import type {
  AdminCategory,
  AdminData,
  AdminProduct,
  Banner,
  Order,
  OrderItem,
} from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  DEMO SEED DATA  (frontend only)
 *
 *  This file fabricates a realistic dataset so the admin UI is fully
 *  clickable without a backend. When the backend is ready, the seed below
 *  is no longer needed — see `lib/admin/store.tsx`, which is the single
 *  place that should be swapped over to real API calls.
 *
 *  Everything here is DETERMINISTIC (no Math.random / Date.now) so server
 *  and client render the same markup and React doesn't throw a hydration
 *  mismatch.
 * ─────────────────────────────────────────────────────────────────────────
 */

const INACTIVE_IDS = new Set(["pet-shampoo", "sugar-free-tablets"]);

function seedStock(name: string, price: number): number {
  return (name.length * 13 + Math.round(price)) % 64; // 0..63, several land low
}

function seedProducts(): AdminProduct[] {
  return products.map((p) => ({
    ...p,
    stock: seedStock(p.name, p.price),
    active: !INACTIVE_IDS.has(p.id),
  }));
}

function slug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function seedCategories(): AdminCategory[] {
  return popularCategories.map((c) => ({
    id: slug(c.name),
    name: c.name,
    iconKey: c.iconKey,
    href: c.href,
  }));
}

function seedBanners(): Banner[] {
  return [
    {
      id: "b1",
      badge: "Pharmaciti Pharmacy",
      titleTop: "Healthcare,",
      titleBottom: "Delivered to You",
      subtitle:
        "Up to 25% off on medicines · Wholesale & retail · Free home delivery",
      ctaLabel: "Shop now",
      ctaHref: "/products",
    },
    {
      id: "b2",
      badge: "Wholesale & Retail",
      titleTop: "Wholesale Prices,",
      titleBottom: "Retail Convenience",
      subtitle:
        "Buy in bulk or single packs — genuine medicines at the best rates",
      ctaLabel: "Shop deals",
      ctaHref: "/products",
    },
    {
      id: "b3",
      badge: "Lab Tests at Home",
      titleTop: "Lab Tests,",
      titleBottom: "Sample at Home",
      subtitle: "Book diagnostic tests with free home sample collection",
      ctaLabel: "Book a test",
      ctaHref: "/products?cat=lab-tests",
    },
  ];
}

function item(productId: string, qty: number): OrderItem {
  const p = products.find((x) => x.id === productId);
  return {
    productId,
    name: p?.name ?? productId,
    price: p?.price ?? 0,
    qty,
  };
}

function order(
  id: string,
  customer: string,
  phone: string,
  address: string,
  status: Order["status"],
  paymentMethod: Order["paymentMethod"],
  placedAt: string,
  items: OrderItem[],
): Order {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return { id, customer, phone, address, items, total, status, paymentMethod, placedAt };
}

function seedOrders(): Order[] {
  return [
    order("PH-10231", "Aarav Sharma", "+91 98480 11234", "Banjara Hills, Hyderabad", "placed", "Online", "2026-06-22", [
      item("dolo-650", 2),
      item("cetirizine", 1),
      item("vitamin-c-zinc", 1),
    ]),
    order("PH-10230", "Priya Reddy", "+91 90000 55621", "Gachibowli, Hyderabad", "packed", "COD", "2026-06-22", [
      item("bp-monitor", 1),
    ]),
    order("PH-10229", "Mohammed Imran", "+91 96666 41200", "Charminar, Hyderabad", "shipped", "Online", "2026-06-21", [
      item("protein-powder", 1),
      item("multivitamin", 1),
    ]),
    order("PH-10228", "Sneha Patil", "+91 99999 78410", "Kondapur, Hyderabad", "delivered", "Online", "2026-06-20", [
      item("baby-diapers", 1),
      item("baby-lotion", 1),
    ]),
    order("PH-10227", "Rahul Verma", "+91 90909 12345", "Madhapur, Hyderabad", "delivered", "COD", "2026-06-20", [
      item("pantoprazole", 1),
      item("digene", 2),
    ]),
    order("PH-10226", "Ananya Iyer", "+91 91234 56789", "Kukatpally, Hyderabad", "cancelled", "Online", "2026-06-19", [
      item("n95-mask", 3),
    ]),
    order("PH-10225", "Vikram Singh", "+91 98111 22333", "Secunderabad", "delivered", "Online", "2026-06-18", [
      item("glucometer", 1),
      item("metformin", 2),
    ]),
    order("PH-10224", "Kavya Nair", "+91 93939 84747", "Jubilee Hills, Hyderabad", "shipped", "COD", "2026-06-18", [
      item("full-body", 1),
    ]),
    order("PH-10223", "Arjun Mehta", "+91 90011 22044", "Ameerpet, Hyderabad", "delivered", "Online", "2026-06-16", [
      item("volini-gel", 1),
      item("pain-spray", 1),
      item("combiflam", 1),
    ]),
    order("PH-10222", "Divya Rao", "+91 97000 31415", "Begumpet, Hyderabad", "delivered", "Online", "2026-06-15", [
      item("cbc-test", 1),
      item("vitamin-d-test", 1),
    ]),
    order("PH-10221", "Karthik Kumar", "+91 95555 90909", "Hitech City, Hyderabad", "delivered", "COD", "2026-06-14", [
      item("sanitizer", 2),
      item("face-wash", 1),
    ]),
    order("PH-10220", "Meera Joshi", "+91 98765 43210", "Manikonda, Hyderabad", "delivered", "Online", "2026-06-12", [
      item("thermometer", 1),
      item("ors-orange", 2),
      item("throat-lozenges", 1),
    ]),
  ];
}

export function seedAdminData(): AdminData {
  return {
    products: seedProducts(),
    orders: seedOrders(),
    categories: seedCategories(),
    banners: seedBanners(),
  };
}
