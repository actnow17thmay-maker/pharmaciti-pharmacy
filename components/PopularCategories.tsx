import Link from "next/link";
import { popularCategories } from "@/lib/products";
import { CategoryIcon } from "@/components/CategoryIcon";

export function PopularCategories() {
  return (
    <section className="px-4 pt-6 md:px-6">
      <h2 className="text-lg font-extrabold text-ink md:text-xl">
        Shop by category
      </h2>

      <div className="mt-3 grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-8">
        {popularCategories.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            className="flex flex-col items-center gap-1.5 rounded-2xl bg-category p-2.5 text-center shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/85 shadow-sm md:h-12 md:w-12">
              <CategoryIcon
                iconKey={c.iconKey}
                className="h-5 w-5 text-sea-600 md:h-6 md:w-6"
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
