"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SearchX } from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  getCategory,
  searchProducts,
} from "@/lib/products";

function ProductsView() {
  const params = useSearchParams();
  const qParam = params.get("q") ?? "";
  const catParam = params.get("cat") ?? "all";

  const [q, setQ] = useState(qParam);
  const [cat, setCat] = useState(catParam);

  useEffect(() => setQ(qParam), [qParam]);
  useEffect(() => setCat(catParam), [catParam]);

  const results = useMemo(() => {
    const list = searchProducts(q);
    return cat === "all" ? list : list.filter((p) => p.category === cat);
  }, [q, cat]);

  const heading =
    cat !== "all" ? getCategory(cat)?.name ?? "Shop" : q ? `Results for “${q}”` : "All Products";

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Header variant="inner" title="Shop" />

      <main className="px-4 pb-28 pt-3 md:px-6 md:pb-16">
        <div className="flex items-center gap-2 rounded-2xl border border-hairline bg-white px-4 py-3 shadow-sm focus-within:border-sea-300">
          <Search className="h-5 w-5 text-sea-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search medicines & health products"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          />
        </div>

        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          <Chip active={cat === "all"} onClick={() => setCat("all")}>
            All
          </Chip>
          {categories.map((c) => (
            <Chip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
              {c.name}
            </Chip>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <h1 className="text-lg font-bold text-ink md:text-xl">{heading}</h1>
          <span className="text-xs font-medium text-muted">
            {results.length} item{results.length === 1 ? "" : "s"}
          </span>
        </div>

        {results.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <SearchX className="h-10 w-10 text-sea-300" />
            <p className="text-base font-bold text-ink">No products found</p>
            <p className="max-w-xs text-sm text-muted">
              Try a different search or pick another category.
            </p>
            <button
              onClick={() => {
                setQ("");
                setCat("all");
              }}
              className="rounded-xl bg-sea-500 px-5 py-2.5 text-sm font-bold text-white"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
        active
          ? "border-sea-500 bg-sea-500 text-white"
          : "border-hairline bg-white text-ink-soft hover:border-sea-300"
      }`}
    >
      {children}
    </button>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={<div className="p-16 text-center text-muted">Loading…</div>}
    >
      <ProductsView />
    </Suspense>
  );
}
