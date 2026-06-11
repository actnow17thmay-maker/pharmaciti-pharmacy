"use client";

import Link from "next/link";
import {
  UploadCloud,
  FileText,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

const STEPS = [
  {
    icon: FileText,
    title: "Upload your prescription",
    desc: "Snap a photo or pick a file from your device.",
  },
  {
    icon: ShieldCheck,
    title: "Our pharmacist verifies it",
    desc: "We check the medicines and dosage for you.",
  },
  {
    icon: Clock,
    title: "Get it delivered",
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
