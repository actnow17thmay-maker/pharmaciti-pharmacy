"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { seedAdminData } from "./mock";
import type {
  AdminCategory,
  AdminData,
  AdminProduct,
  Banner,
  OrderStatus,
} from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ADMIN STORE  ·  THE BACKEND SEAM
 *
 *  This is the ONE file the backend dev swaps over to real APIs. The whole
 *  admin UI talks to the data through the `useAdmin()` hook below and never
 *  touches storage/fetch directly. So the contract is:
 *
 *    • Keep the shape of `AdminValue` (the hook's return type) stable.
 *    • Replace the *bodies* of the mutation callbacks with real calls
 *      (`await fetch('/api/products', { method: 'POST', ... })`, etc.)
 *      and refresh `data` from the server response.
 *    • Replace the seed + localStorage bits with a real fetch on mount.
 *
 *  Right now everything is in-memory, seeded from `mock.ts`, and mirrored to
 *  localStorage so edits survive a refresh during the demo. No network, no DB.
 * ─────────────────────────────────────────────────────────────────────────
 */

const DATA_KEY = "pharmaciti_admin_data_v1";
const AUTH_KEY = "pharmaciti_admin_auth_v1";

/** Demo credentials, shown on the login screen. Replace with real auth. */
export const DEMO_USER = "admin";
export const DEMO_PASS = "admin";

type AdminValue = {
  /** False until localStorage has been read on the client (avoids SSR mismatch). */
  hydrated: boolean;
  data: AdminData;

  /* auth (demo only) */
  authed: boolean;
  signIn: (user: string, pass: string) => boolean;
  signOut: () => void;

  /* products */
  addProduct: (p: AdminProduct) => void;
  updateProduct: (id: string, patch: Partial<AdminProduct>) => void;
  deleteProduct: (id: string) => void;

  /* orders */
  updateOrderStatus: (id: string, status: OrderStatus) => void;

  /* categories */
  addCategory: (c: AdminCategory) => void;
  updateCategory: (id: string, patch: Partial<AdminCategory>) => void;
  deleteCategory: (id: string) => void;

  /* banners */
  addBanner: (b: Banner) => void;
  updateBanner: (id: string, patch: Partial<Banner>) => void;
  deleteBanner: (id: string) => void;

  /* wipe local edits and re-seed the demo dataset */
  resetDemo: () => void;
};

const AdminContext = createContext<AdminValue | null>(null);

/** Stable-ish id for newly created rows (only ever called in event handlers). */
export function genId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

export function AdminProvider({ children }: { children: React.ReactNode }) {
  // Seed deterministically so the very first server/client render matches.
  const [data, setData] = useState<AdminData>(() => seedAdminData());
  const [authed, setAuthed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // After mount, pull any saved edits / session from localStorage.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DATA_KEY);
      if (raw) setData(JSON.parse(raw) as AdminData);
    } catch {
      /* ignore corrupt storage */
    }
    try {
      setAuthed(localStorage.getItem(AUTH_KEY) === "1");
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Mirror every change back to localStorage (skip the pre-hydration render).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(data));
    } catch {
      /* ignore quota errors */
    }
  }, [data, hydrated]);

  /* ── auth ─────────────────────────────────────────────────────────── */
  const signIn = useCallback((user: string, pass: string) => {
    const ok = user.trim() === DEMO_USER && pass === DEMO_PASS;
    if (ok) {
      setAuthed(true);
      try {
        localStorage.setItem(AUTH_KEY, "1");
      } catch {
        /* ignore */
      }
    }
    return ok;
  }, []);

  const signOut = useCallback(() => {
    setAuthed(false);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  /* ── products ─────────────────────────────────────────────────────── */
  const addProduct = useCallback((p: AdminProduct) => {
    setData((d) => ({ ...d, products: [p, ...d.products] }));
  }, []);

  const updateProduct = useCallback(
    (id: string, patch: Partial<AdminProduct>) => {
      setData((d) => ({
        ...d,
        products: d.products.map((p) =>
          p.id === id ? { ...p, ...patch } : p,
        ),
      }));
    },
    [],
  );

  const deleteProduct = useCallback((id: string) => {
    setData((d) => ({
      ...d,
      products: d.products.filter((p) => p.id !== id),
    }));
  }, []);

  /* ── orders ───────────────────────────────────────────────────────── */
  const updateOrderStatus = useCallback((id: string, status: OrderStatus) => {
    setData((d) => ({
      ...d,
      orders: d.orders.map((o) => (o.id === id ? { ...o, status } : o)),
    }));
  }, []);

  /* ── categories ───────────────────────────────────────────────────── */
  const addCategory = useCallback((c: AdminCategory) => {
    setData((d) => ({ ...d, categories: [...d.categories, c] }));
  }, []);

  const updateCategory = useCallback(
    (id: string, patch: Partial<AdminCategory>) => {
      setData((d) => ({
        ...d,
        categories: d.categories.map((c) =>
          c.id === id ? { ...c, ...patch } : c,
        ),
      }));
    },
    [],
  );

  const deleteCategory = useCallback((id: string) => {
    setData((d) => ({
      ...d,
      categories: d.categories.filter((c) => c.id !== id),
    }));
  }, []);

  /* ── banners ──────────────────────────────────────────────────────── */
  const addBanner = useCallback((b: Banner) => {
    setData((d) => ({ ...d, banners: [...d.banners, b] }));
  }, []);

  const updateBanner = useCallback((id: string, patch: Partial<Banner>) => {
    setData((d) => ({
      ...d,
      banners: d.banners.map((b) => (b.id === id ? { ...b, ...patch } : b)),
    }));
  }, []);

  const deleteBanner = useCallback((id: string) => {
    setData((d) => ({
      ...d,
      banners: d.banners.filter((b) => b.id !== id),
    }));
  }, []);

  /* ── reset ────────────────────────────────────────────────────────── */
  const resetDemo = useCallback(() => {
    const fresh = seedAdminData();
    setData(fresh);
    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(fresh));
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<AdminValue>(
    () => ({
      hydrated,
      data,
      authed,
      signIn,
      signOut,
      addProduct,
      updateProduct,
      deleteProduct,
      updateOrderStatus,
      addCategory,
      updateCategory,
      deleteCategory,
      addBanner,
      updateBanner,
      deleteBanner,
      resetDemo,
    }),
    [
      hydrated,
      data,
      authed,
      signIn,
      signOut,
      addProduct,
      updateProduct,
      deleteProduct,
      updateOrderStatus,
      addCategory,
      updateCategory,
      deleteCategory,
      addBanner,
      updateBanner,
      deleteBanner,
      resetDemo,
    ],
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
