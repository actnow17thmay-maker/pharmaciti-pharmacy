"use client";

import { useEffect, useState } from "react";
import { X, BadgePercent, Store, Truck } from "lucide-react";
import { Logo } from "@/components/Logo";

const FEATURES = [
  { icon: BadgePercent, label: "Up to 25% Discount" },
  { icon: Store, label: "Wholesale & Retail" },
  { icon: Truck, label: "Free Home Delivery" },
];

const STORAGE_KEY = "pharmaciti_welcomed";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const close = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink/50 px-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div
        className="animate-fade-up relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Hero: the 25% OFF offer is the headline */}
        <div className="relative overflow-hidden bg-gradient-to-br from-sea-400 via-sea-500 to-sea-600 px-6 pb-9 pt-7 text-center text-white">
          <span className="pointer-events-none absolute -left-8 -top-10 h-28 w-28 rounded-full bg-white/15" />
          <span className="pointer-events-none absolute -bottom-14 -right-6 h-36 w-36 rounded-full bg-white/10" />

          <div className="relative flex justify-center">
            <Logo variant="light" />
          </div>

          <p className="relative mt-7 text-[12px] font-bold uppercase tracking-[0.22em] text-white/90">
            First order offer
          </p>
          <div className="relative mt-1 flex items-end justify-center gap-2">
            <span className="text-[68px] font-black leading-[0.85] tracking-tight drop-shadow-sm">
              25%
            </span>
            <span className="mb-2 text-2xl font-extrabold">OFF</span>
          </div>
          <p className="relative mt-2 text-[13px] font-medium text-white/90">
            on your first order
          </p>

          <div className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <span className="text-[11px] font-semibold text-muted">Use code</span>
            <span className="text-sm font-extrabold tracking-wide text-sea-600">
              PHARMA25
            </span>
          </div>
        </div>

        {/* Body: branding + the original welcome copy + feature highlights */}
        <div className="px-6 pb-6 pt-5">
          <h2 className="text-center text-xl font-extrabold text-ink">
            Welcome to Pharmaciti
          </h2>
          <p className="mt-1 text-center text-[13px] text-ink-soft">
            Genuine medicines &amp; wellness essentials, delivered to your door.
          </p>

          <div className="mt-5 grid grid-cols-3 divide-x divide-hairline">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 px-2 text-center"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sea-50">
                  <Icon className="h-5 w-5 text-sea-500" />
                </span>
                <span className="text-[11px] font-semibold leading-tight text-ink">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={close}
            className="mt-6 w-full rounded-xl bg-sea-500 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-sea-600"
          >
            Start shopping
          </button>
        </div>
      </div>
    </div>
  );
}
