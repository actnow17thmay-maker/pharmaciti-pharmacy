"use client";

import { useEffect, useState } from "react";
import { X, Store, Truck } from "lucide-react";
import { Logo } from "@/components/Logo";

const FEATURES = [
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

        {/* Hero: the offer + welcome copy + features fill ~80% of the modal in
            brand orange. Only the CTA sits on white below. */}
        <div className="relative overflow-hidden bg-gradient-to-br from-sea-400 via-sea-500 to-sea-600 px-6 pb-9 pt-10 text-center text-white">
          <span className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-white/15" />
          <span className="pointer-events-none absolute -bottom-16 -right-8 h-44 w-44 rounded-full bg-white/10" />

          <div className="relative flex justify-center">
            <Logo variant="light" />
          </div>

          <p className="relative mt-8 text-[12px] font-bold uppercase tracking-[0.22em] text-white/90">
            First order offer
          </p>
          <div className="relative mt-1.5 flex items-end justify-center gap-2">
            <span className="mb-3.5 text-2xl font-extrabold">Up to</span>
            <span className="text-[88px] font-black leading-[0.82] tracking-tight drop-shadow-sm">
              25%
            </span>
            <span className="mb-3 text-3xl font-extrabold">OFF</span>
          </div>
          <p className="relative mt-3 text-sm font-medium text-white/90">
            on your first order
          </p>

          <div className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm">
            <span className="text-[11px] font-semibold text-muted">Use code</span>
            <span className="text-sm font-extrabold tracking-wide text-sea-600">
              PHARMA25
            </span>
          </div>

          <h2 className="relative mt-7 text-xl font-extrabold">
            Welcome to Pharmaciti
          </h2>
          <p className="relative mt-1 text-[13px] text-white/90">
            Genuine medicines &amp; wellness essentials, delivered to your door.
          </p>

          <div className="relative mt-5 rounded-2xl bg-white p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-3">
              {FEATURES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 px-2 text-center"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sea-50">
                    <Icon className="h-6 w-6 text-sea-600" />
                  </span>
                  <span className="text-[13px] font-semibold leading-tight text-ink">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* White footer: just the CTA */}
        <div className="px-6 pb-6 pt-5">
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
