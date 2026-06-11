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
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/80 text-ink-soft shadow-sm transition hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-app-header px-6 pb-6 pt-8 text-center">
          <div className="flex justify-center">
            <Logo variant="brand" />
          </div>
          <h2 className="mt-4 text-xl font-extrabold text-ink">
            Welcome to Pharmaciti
          </h2>
          <p className="mt-1 text-[13px] text-ink-soft">
            Genuine medicines &amp; wellness essentials, delivered to your door.
          </p>
        </div>

        <div className="grid grid-cols-3 divide-x divide-hairline px-2 py-5">
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

        <div className="px-6 pb-6">
          <button
            type="button"
            onClick={close}
            className="w-full rounded-xl bg-sea-500 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-sea-600"
          >
            Start shopping
          </button>
        </div>
      </div>
    </div>
  );
}
