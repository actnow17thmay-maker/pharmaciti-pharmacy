"use client";

import Link from "next/link";
import {
  UploadCloud,
  ShieldCheck,
  CircleCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

// The order journey, shown as a progress tracker. Step 0 is the current stage
// (the customer is on the upload screen).
const FLOW = [
  { icon: UploadCloud, label: "Upload prescription" },
  { icon: ShieldCheck, label: "Pharmacist verifies" },
  { icon: CircleCheck, label: "Confirm order" },
  { icon: Truck, label: "Home delivery" },
];
const ACTIVE_STEP = 0;

const STEPS = [
  {
    icon: UploadCloud,
    title: "Upload prescription",
    desc: "Snap a photo or pick a file from your device.",
  },
  {
    icon: ShieldCheck,
    title: "Pharmacist verifies",
    desc: "We check the medicines and dosage for you.",
  },
  {
    icon: CircleCheck,
    title: "Confirm order",
    desc: "Review the prepared order and confirm to proceed.",
  },
  {
    icon: Truck,
    title: "Home delivery",
    desc: "Approved orders reach your door — free of charge.",
  },
];

export default function PrescriptionPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Header variant="inner" title="Upload Prescription" />

      <main className="px-4 pb-36 pt-4 md:px-6 md:pb-16">
        <div className="rounded-2xl border border-sea-100 bg-sea-50/70 p-4">
          <h1 className="text-base font-bold text-ink">
            Order with prescription
          </h1>
          <p className="mt-1 text-[12px] text-muted">
            Upload a valid prescription and our team will prepare your order.
          </p>
        </div>

        {/* Order progress tracker */}
        <div className="mt-4 rounded-2xl border border-hairline bg-white p-4 shadow-card">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
            Order progress
          </p>
          <ol className="mt-3 flex items-start">
            {FLOW.map((step, i) => {
              const active = i <= ACTIVE_STEP;
              const current = i === ACTIVE_STEP;
              const Icon = step.icon;
              return (
                <li
                  key={step.label}
                  className="relative flex flex-1 flex-col items-center text-center"
                >
                  {i > 0 && (
                    <span
                      className={`absolute right-1/2 top-5 z-0 h-0.5 w-full ${
                        i <= ACTIVE_STEP ? "bg-sea-500" : "bg-hairline"
                      }`}
                    />
                  )}
                  <span
                    className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 transition ${
                      active
                        ? "border-sea-500 bg-sea-500 text-white"
                        : "border-hairline bg-white text-muted"
                    } ${current ? "shadow-soft ring-4 ring-sea-100" : ""}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span
                    className={`mt-2 text-[10px] font-semibold leading-tight ${
                      active ? "text-sea-600" : "text-muted"
                    }`}
                  >
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Dropzone (demo) */}
        <label className="mt-4 flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-sea-200 bg-white px-6 py-10 text-center transition hover:border-sea-400 hover:bg-sea-50/40">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-sea-50">
            <UploadCloud className="h-7 w-7 text-sea-500" />
          </span>
          <span className="text-sm font-bold text-ink">
            Tap to upload prescription
          </span>
          <span className="text-[11px] text-muted">
            JPG, PNG or PDF · up to 10 MB
          </span>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
          />
        </label>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-sea-500 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-sea-600">
          Submit prescription <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-2 text-center text-[11px] text-muted">
          Demo only — no file is uploaded or stored.
        </p>

        {/* How it works */}
        <h2 className="mt-8 text-sm font-bold text-ink">How it works</h2>
        <div className="mt-3 space-y-3">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="flex gap-3 rounded-2xl border border-hairline bg-white p-3 shadow-card"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sea-50">
                <Icon className="h-5 w-5 text-sea-600" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  {i + 1}. {title}
                </p>
                <p className="text-[12px] text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/products"
          className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-sea-600"
        >
          Continue shopping <ArrowRight className="h-4 w-4" />
        </Link>
      </main>

      <BottomNav />
    </div>
  );
}
