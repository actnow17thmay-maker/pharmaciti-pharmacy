import Link from "next/link";
import { Plus } from "lucide-react";
import { categories } from "@/lib/products";
import { CategoryIcon } from "@/components/CategoryIcon";

export function CategoryTabs() {
  return (
    <section className="px-4 pt-4 md:px-6">
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 md:flex-wrap md:justify-start md:overflow-visible">
        {categories.map((c, i) => (
          <Link
            key={c.id}
            href={`/products?cat=${c.id}`}
            style={{ "--glow-delay": `${i * 0.18}s` } as React.CSSProperties}
            className="tile-glow relative flex w-[72px] shrink-0 flex-col items-center gap-1.5 rounded-2xl bg-category p-2.5 text-center shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:w-[88px]"
          >
            {c.badge && (
              <span className="absolute right-1 top-1 z-10 rounded-full bg-sea-600 px-1.5 py-0.5 text-[8px] font-bold text-white">
                {c.badge}
              </span>
            )}
            <span className="relative grid h-11 w-11 place-items-center rounded-full bg-white/85 shadow-sm md:h-12 md:w-12">
              <CategoryIcon
                iconKey={c.iconKey}
                className="h-5 w-5 text-sea-600 md:h-6 md:w-6"
                strokeWidth={1.9}
              />
              {c.id === "pharmacy" && (
                <span className="absolute -bottom-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-brand-600 ring-2 ring-white">
                  <Plus className="h-2.5 w-2.5 text-white" strokeWidth={4} />
                </span>
              )}
            </span>
            <span className="text-[11px] font-semibold leading-tight text-ink md:text-xs">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
