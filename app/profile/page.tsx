"use client";

import Link from "next/link";
import {
  User,
  Package,
  MapPin,
  Heart,
  Headphones,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

const ROWS = [
  { icon: Package, label: "My Orders", desc: "Track & reorder" },
  { icon: MapPin, label: "Saved Addresses", desc: "Home, Office & more" },
  { icon: Heart, label: "Wishlist", desc: "Items you love" },
  { icon: Headphones, label: "Help & Support", desc: "We're here to help" },
];

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Header variant="inner" title="Profile" />

      <main className="px-4 pb-36 pt-4 md:px-6 md:pb-16">
        {/* Account card */}
        <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-white p-4 shadow-card">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sea-50">
            <User className="h-7 w-7 text-sea-500" />
          </span>
          <div className="flex-1">
            <p className="text-base font-bold text-ink">Guest User</p>
            <p className="text-[12px] text-muted">Sign in to sync your orders</p>
          </div>
          <button className="rounded-xl bg-sea-500 px-4 py-2 text-xs font-bold text-white shadow-soft">
            Sign in
          </button>
        </div>

        {/* Rows */}
        <div className="mt-4 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-white shadow-card">
          {ROWS.map(({ icon: Icon, label, desc }) => (
            <button
              key={label}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-sea-50/40"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sea-50">
                <Icon className="h-4 w-4 text-sea-600" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-ink">
                  {label}
                </span>
                <span className="block text-[11px] text-muted">{desc}</span>
              </span>
              <ChevronRight className="h-4 w-4 text-muted" />
            </button>
          ))}
        </div>

        <Link
          href="/cart"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-hairline bg-white py-3 text-sm font-bold text-ink shadow-card transition hover:bg-sea-50/40"
        >
          <ShoppingBag className="h-4 w-4 text-sea-500" />
          View your cart
        </Link>

        <p className="mt-4 text-center text-[11px] text-muted">
          Demo profile — sign in &amp; order history are illustrative only.
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
