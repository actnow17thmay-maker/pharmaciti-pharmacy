import Link from "next/link";
import { categories } from "@/lib/products";
import { CategoryIcon } from "@/components/CategoryIcon";

export function CategoryTabs() {
  return (
    <section className="px-4 pt-4 md:px-6">
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 md:flex-wrap md:justify-start md:overflow-visible">
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/products?cat=${c.id}`}
            className="relative flex w-[82px] shrink-0 flex-col items-center gap-2 rounded-2xl bg-category p-3 text-center shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:w-[100px]"
          >
            {c.badge && (
              <span className="absolute right-1 top-1 rounded-full bg-coral-600 px-1.5 py-0.5 text-[8px] font-bold text-white">
                {c.badge}
              </span>
            )}
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/85 shadow-sm md:h-14 md:w-14">
              <CategoryIcon
                iconKey={c.iconKey}
                className="h-6 w-6 text-coral-600 md:h-7 md:w-7"
                strokeWidth={1.9}
              />
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
