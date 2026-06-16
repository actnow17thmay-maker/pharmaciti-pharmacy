import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Plus,
  BadgePercent,
  Store,
  FlaskConical,
  type LucideProps,
} from "lucide-react";

type Slide = {
  badge: string;
  title: [string, string];
  subtitle: string;
  cta: { label: string; href: string };
  features: { icon: React.ComponentType<LucideProps>; label: string }[];
  decor: React.ComponentType<LucideProps>;
};

const SLIDES: Slide[] = [
  {
    badge: "Pharmaciti Pharmacy",
    title: ["Healthcare,", "Delivered to You"],
    subtitle:
      "Up to 25% off on medicines · Wholesale & retail · Free home delivery",
    cta: { label: "Shop now", href: "/products" },
    features: [
      { icon: Truck, label: "At-home delivery" },
      { icon: ShieldCheck, label: "100% genuine" },
    ],
    decor: Plus,
  },
  {
    badge: "Wholesale & Retail",
    title: ["Wholesale Prices,", "Retail Convenience"],
    subtitle:
      "Buy in bulk or single packs — genuine medicines at the best rates",
    cta: { label: "Shop deals", href: "/products" },
    features: [
      { icon: BadgePercent, label: "Best prices" },
      { icon: Store, label: "Bulk orders" },
    ],
    decor: Store,
  },
  {
    badge: "Lab Tests at Home",
    title: ["Lab Tests,", "Sample at Home"],
    subtitle: "Book diagnostic tests with free home sample collection",
    cta: { label: "Book a test", href: "/products?cat=lab-tests" },
    features: [
      { icon: Truck, label: "Home collection" },
      { icon: ShieldCheck, label: "Reports in 24h" },
    ],
    decor: FlaskConical,
  },
];

export function HeroBanner() {
  return (
    <section className="pt-3">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:px-6">
        {SLIDES.map((slide, i) => {
          const Decor = slide.decor;
          return (
            <div
              key={i}
              className="relative min-w-full snap-center overflow-hidden rounded-3xl bg-gradient-to-r from-sea-600 to-sea-400 p-4 shadow-card md:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/25" />
              <div className="pointer-events-none absolute -bottom-16 right-10 h-36 w-36 rounded-full bg-white/15" />
              <Decor
                className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-white/40 md:block"
                size={128}
                strokeWidth={2.4}
              />

              <div className="relative z-10 max-w-[80%] md:max-w-[62%]">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {slide.badge}
                </span>
                <h2 className="mt-2 text-xl font-extrabold leading-tight text-white md:text-3xl">
                  {slide.title[0]}
                  <br />
                  {slide.title[1]}
                </h2>
                <p className="mt-1.5 text-[13px] text-white/85 md:text-base">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.cta.href}
                  className="mt-3 inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-bold text-white transition hover:bg-black active:scale-[0.98]"
                >
                  {slide.cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] font-semibold text-white/85">
                  {slide.features.map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-1">
                      <Icon className="h-4 w-4" /> {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2.5 flex justify-center gap-1.5">
        <span className="h-1.5 w-5 rounded-full bg-sea-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-sea-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-sea-200" />
      </div>
    </section>
  );
}
