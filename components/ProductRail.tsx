import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type Props = {
  title: string;
  products: Product[];
  href?: string;
};

export function ProductRail({ title, products, href }: Props) {
  return (
    <section className="mt-7">
      <div className="mb-3 flex items-center justify-between px-4 md:px-6">
        <h2 className="text-base font-bold text-ink md:text-lg">{title}</h2>
        {href && (
          <Link
            href={href}
            className="flex items-center gap-0.5 text-xs font-bold text-sea-600 hover:text-sea-700"
          >
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1 md:px-6">
        {products.map((p) => (
          <div key={p.id} className="w-40 shrink-0 md:w-48">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
