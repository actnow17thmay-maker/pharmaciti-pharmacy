import Link from "next/link";
import { QrCode, BadgePercent, BadgeCheck, Truck } from "lucide-react";

export function PromoCarousel() {
  return (
    <section className="mt-4">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:px-6">
        <Link
          href="/products"
          className="relative flex min-w-[86%] snap-center items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-deep-700 to-deep-600 p-4 text-white shadow-card md:min-w-[420px]"
        >
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-white/90">
              Wholesale &amp; retail
            </p>
            <h3 className="text-lg font-extrabold leading-tight">
              No minimum
              <br />
              order value
            </h3>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-white/85">
              <Truck className="h-3.5 w-3.5 shrink-0" />
              Free home delivery on every order
            </p>
          </div>
          <BadgeCheck
            className="h-16 w-16 shrink-0 text-leaf-400"
            strokeWidth={1.4}
          />
        </Link>

        <Link
          href="/products"
          className="relative flex min-w-[86%] snap-center items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-sea-600 to-sea-400 p-4 text-white shadow-card md:min-w-[420px]"
        >
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-white/90">
              100% genuine medicines
            </p>
            <h3 className="text-lg font-extrabold leading-tight">
              Authenticity,
              <br />
              Scan away!
            </h3>
            <p className="mt-1 text-[11px] text-white/85">
              Verify every medicine you order
            </p>
          </div>
          <QrCode className="h-16 w-16 shrink-0 text-white/90" strokeWidth={1.4} />
        </Link>

        <Link
          href="/products"
          className="relative flex min-w-[86%] snap-center items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-300 to-sky-200 p-4 text-deep-700 shadow-card md:min-w-[420px]"
        >
          <div className="flex-1">
            <p className="text-[11px] font-bold uppercase tracking-wide">
              First order offer
            </p>
            <h3 className="text-lg font-extrabold leading-tight text-ink">
              Up to 25% OFF
            </h3>
            <p className="mt-1 text-[12px] font-semibold text-ink/70">
              Use code{" "}
              <span className="rounded bg-white/70 px-1.5 py-0.5 font-bold">
                PHARMA25
              </span>
            </p>
          </div>
          <BadgePercent
            className="h-16 w-16 shrink-0 text-ink/70"
            strokeWidth={1.4}
          />
        </Link>
      </div>

      <div className="mt-2.5 flex justify-center gap-1.5">
        <span className="h-1.5 w-5 rounded-full bg-sea-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-sea-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-sea-200" />
      </div>
    </section>
  );
}
