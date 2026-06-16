import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Plus } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="px-4 pt-6 md:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sea-600 to-sea-400 p-6 shadow-card md:p-10">
        {/* decorative shapes */}
        <div className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full bg-white/25" />
        <div className="pointer-events-none absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-white/15" />
        <Plus
          className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-white/40 md:block"
          size={150}
          strokeWidth={2.4}
        />

        <div className="relative z-10 max-w-[80%] md:max-w-[62%]">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Pharmaciti Pharmacy
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white md:text-4xl">
            Healthcare,
            <br />
            Delivered to You
          </h2>
          <p className="mt-2 text-sm text-white/85 md:text-base">
            Up to 25% off on medicines · Wholesale &amp; retail · Free home
            delivery
          </p>
          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-black active:scale-[0.98]"
          >
            Shop now <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[12px] font-semibold text-white/85">
            <span className="flex items-center gap-1">
              <Truck className="h-4 w-4" /> At-home delivery
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> 100% genuine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
