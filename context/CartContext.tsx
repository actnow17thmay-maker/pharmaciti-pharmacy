"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Check } from "lucide-react";
import { getProduct, type Product } from "@/lib/products";

const STORAGE_KEY = "pharmaciti_cart_v1";
export const FREE_DELIVERY_THRESHOLD = 500;

type CartLine = { productId: string; qty: number };

export type DetailedLine = {
  product: Product;
  qty: number;
  lineTotal: number;
  lineMrp: number;
};

type CartValue = {
  items: DetailedLine[];
  itemCount: number;
  subtotal: number;
  mrpTotal: number;
  savings: number;
  freeDeliveryThreshold: number;
  remainingForFreeDelivery: number;
  hasFreeDelivery: boolean;
  qtyOf: (productId: string) => number;
  addItem: (productId: string, qty?: number) => void;
  decrement: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore quota errors */
    }
  }, [lines]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const addItem = useCallback(
    (productId: string, qty = 1) => {
      setLines((prev) => {
        const existing = prev.find((l) => l.productId === productId);
        if (existing) {
          return prev.map((l) =>
            l.productId === productId ? { ...l, qty: l.qty + qty } : l,
          );
        }
        return [...prev, { productId, qty }];
      });
      const p = getProduct(productId);
      showToast(p ? `${p.name} added` : "Added to cart");
    },
    [showToast],
  );

  const decrement = useCallback((productId: string) => {
    setLines((prev) =>
      prev
        .map((l) => (l.productId === productId ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.productId === productId ? { ...l, qty } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartValue>(() => {
    const items: DetailedLine[] = lines
      .map((l) => {
        const product = getProduct(l.productId);
        if (!product) return null;
        return {
          product,
          qty: l.qty,
          lineTotal: product.price * l.qty,
          lineMrp: product.mrp * l.qty,
        };
      })
      .filter((x): x is DetailedLine => x !== null);

    const subtotal = items.reduce((s, it) => s + it.lineTotal, 0);
    const mrpTotal = items.reduce((s, it) => s + it.lineMrp, 0);
    const itemCount = items.reduce((s, it) => s + it.qty, 0);
    const hasFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;

    return {
      items,
      itemCount,
      subtotal,
      mrpTotal,
      savings: mrpTotal - subtotal,
      freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
      remainingForFreeDelivery: Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal),
      hasFreeDelivery,
      qtyOf: (productId: string) =>
        lines.find((l) => l.productId === productId)?.qty ?? 0,
      addItem,
      decrement,
      setQty,
      removeItem,
      clear,
    };
  }, [lines, addItem, decrement, setQty, removeItem, clear]);

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-28 z-[70] flex justify-center px-4 md:bottom-10">
          <div className="animate-fade-up flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-xl">
            <Check className="h-4 w-4 text-leaf-400" strokeWidth={3} />
            {toast}
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
