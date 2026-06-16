"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { searchProducts } from "@/lib/products";

type Props = {
  placeholder: string;
  className?: string;
};

/**
 * Search input with a live typeahead dropdown. As the user types, matching
 * products are suggested below; Enter (or "see all results") routes to the
 * products page, and a suggestion routes straight to that product.
 */
export function SearchBox({ placeholder, className }: Props) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const suggestions = useMemo(() => {
    const query = q.trim();
    if (query.length < 1) return [];
    return searchProducts(query).slice(0, 6);
  }, [q]);

  const go = (href: string) => {
    setQ("");
    setFocused(false);
    router.push(href);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    go(q.trim() ? `/products?q=${encodeURIComponent(q.trim())}` : "/products");
  };

  const open = focused && q.trim().length > 0;

  return (
    <div className={`relative ${className ?? ""}`}>
      <form onSubmit={submit}>
        <div className="search-glow flex items-center gap-2 rounded-2xl border bg-white px-4 py-3 transition md:py-2.5">
          <Search className="h-5 w-5 shrink-0 text-sea-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              blurTimer.current = setTimeout(() => setFocused(false), 120);
            }}
            placeholder={placeholder}
            aria-label="Search products"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          />
        </div>
      </form>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-hairline bg-white shadow-xl">
          {suggestions.length > 0 ? (
            <ul className="max-h-[60vh] overflow-y-auto py-1">
              {suggestions.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => go(`/product/${p.id}`)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition hover:bg-sea-50"
                  >
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-xs font-bold text-ink-soft"
                      style={{ background: p.tint }}
                    >
                      {p.name.slice(0, 1)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-ink">
                        {p.name}
                      </span>
                      <span className="block truncate text-[11px] text-muted">
                        {p.brand} · ₹{p.price}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
              <li className="border-t border-hairline">
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() =>
                    go(`/products?q=${encodeURIComponent(q.trim())}`)
                  }
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-[13px] font-semibold text-sea-600 transition hover:bg-sea-50"
                >
                  <Search className="h-4 w-4 shrink-0" />
                  See all results for “{q.trim()}”
                </button>
              </li>
            </ul>
          ) : (
            <div className="px-4 py-5 text-center text-[13px] text-muted">
              No matches for “{q.trim()}”
            </div>
          )}
        </div>
      )}
    </div>
  );
}
