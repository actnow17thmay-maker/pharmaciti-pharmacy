import { BadgePercent, Store, Truck } from "lucide-react";

const FEATURES = [
  { icon: BadgePercent, label: "Up to 25% Discount" },
  { icon: Store, label: "Wholesale & Retail" },
  { icon: Truck, label: "Free Home Delivery" },
];

export function FeatureStrip() {
  return (
    <section className="px-4 pt-4 md:px-6">
      <div className="grid grid-cols-3 divide-x divide-hairline rounded-2xl border border-hairline bg-white py-3 shadow-card">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 px-2 text-center"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-coral-50">
              <Icon className="h-4 w-4 text-coral-500" />
            </span>
            <span className="text-[11px] font-semibold leading-tight text-ink md:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
