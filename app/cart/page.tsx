"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trash2,
  ShoppingBag,
  Truck,
  ArrowRight,
  CheckCircle2,
  Tag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatRupees } from "@/lib/format";
import { Header } from "@/components/Header";
import { AddToCart } from "@/components/AddToCart";
import { CategoryIcon } from "@/components/CategoryIcon";
import { getCategory } from "@/lib/products";

export default function CartPage() {
  const {
    items,
    itemCount,
    subtotal,
    savings,
    hasFreeDelivery,
    remainingForFreeDelivery,
    freeDeliveryThreshold,
    removeItem,
    clear,
  } = useCart();
  const [placed, setPlaced] = useState(false);

  const deliveryFee = subtotal === 0 || hasFreeDelivery ? 0 : 39;
  const toPay = subtotal + deliveryFee;
  const progress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  if (placed) {
    return (
      <div className="mx-auto w-full max-w-[1200px]">
        <Header variant="inner" title="Order placed" />
        <div className="flex flex-col items-center gap-3 px-6 py-20 text-center">
          <CheckCircle2 className="h-16 w-16 text-leaf-500" />
          <h1 className="text-xl font-extrabold text-ink">Order placed!</h1>
          <p className="max-w-sm text-sm text-muted">
            This is a demo confirmation — no payment was taken. In the live
            store this is where checkout &amp; payment will happen.
          </p>
          <div className="mt-3 flex gap-3">
            <Link
              href="/products"
              className="rounded-xl bg-coral-500 px-5 py-2.5 text-sm font-bold text-white"
            >
              Continue shopping
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-hairline px-5 py-2.5 text-sm font-bold text-ink"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto w-full max-w-[1200px]">
        <Header variant="inner" title="Your Cart" />
        <div className="flex flex-col items-center gap-3 px-6 py-24 text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-coral-50">
            <ShoppingBag className="h-9 w-9 text-coral-400" />
          </span>
          <h1 className="text-lg font-bold text-ink">Your cart is empty</h1>
          <p className="max-w-xs text-sm text-muted">
            Add medicines and health essentials to get started.
          </p>
          <Link
            href="/products"
            className="mt-1 rounded-xl bg-coral-500 px-6 py-3 text-sm font-bold text-white shadow-soft"
          >
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Header variant="inner" title="Your Cart" />

      <main className="px-4 pb-36 pt-4 md:grid md:grid-cols-3 md:gap-6 md:px-6 md:pb-16">
        {/* Items */}
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">
              {itemCount} item{itemCount === 1 ? "" : "s"} in cart
            </p>
            <button
              onClick={clear}
              className="text-xs font-semibold text-muted hover:text-coral-600"
            >
              Clear cart
            </button>
          </div>

          <div className="space-y-3">
            {items.map(({ product, qty, lineTotal, lineMrp }) => {
              const category = getCategory(product.category);
              return (
                <div
                  key={product.id}
                  className="flex gap-3 rounded-2xl border border-hairline bg-white p-3 shadow-card"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="grid h-20 w-20 shrink-0 place-items-center rounded-xl"
                    style={{ backgroundColor: product.tint }}
                  >
                    {category && (
                      <CategoryIcon
                        iconKey={category.iconKey}
                        className="h-9 w-9 text-ink/55"
                        strokeWidth={1.4}
                      />
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/product/${product.id}`}
                        className="line-clamp-2 text-sm font-semibold leading-snug text-ink"
                      >
                        {product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(product.id)}
                        aria-label="Remove item"
                        className="shrink-0 rounded-lg p-1 text-muted hover:bg-coral-50 hover:text-coral-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-[11px] text-muted">{product.pack}</p>

                    <div className="mt-auto flex items-end justify-between pt-2">
                      <div>
                        <span className="text-sm font-bold text-ink">
                          {formatRupees(lineTotal)}
                        </span>
                        {lineMrp > lineTotal && (
                          <span className="ml-1.5 text-xs text-muted line-through">
                            {formatRupees(lineMrp)}
                          </span>
                        )}
                      </div>
                      <AddToCart productId={product.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 md:mt-0">
          <div className="md:sticky md:top-24">
            {!hasFreeDelivery && (
              <div className="mb-3 rounded-2xl border border-hairline bg-white p-3 shadow-card">
                <p className="flex items-center gap-2 text-[12px] font-semibold text-ink">
                  <Truck className="h-4 w-4 text-coral-500" />
                  Add {formatRupees(remainingForFreeDelivery)} more for free
                  delivery
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-coral-100">
                  <div
                    className="h-full rounded-full bg-coral-500 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-hairline bg-white p-4 shadow-card">
              <h2 className="text-sm font-bold text-ink">Bill details</h2>
              <dl className="mt-3 space-y-2 text-sm">
                <Row label="Item total (MRP)" value={formatRupees(subtotal + savings)} />
                <Row
                  label="Product discount"
                  value={`- ${formatRupees(savings)}`}
                  accent
                />
                <Row
                  label="Delivery fee"
                  value={deliveryFee === 0 ? "FREE" : formatRupees(deliveryFee)}
                  accent={deliveryFee === 0}
                />
                <div className="my-2 border-t border-dashed border-hairline" />
                <div className="flex items-center justify-between text-base font-extrabold text-ink">
                  <span>To pay</span>
                  <span>{formatRupees(toPay)}</span>
                </div>
              </dl>

              {savings > 0 && (
                <p className="mt-3 flex items-center gap-2 rounded-xl bg-leaf-400/15 px-3 py-2 text-xs font-bold text-leaf-500">
                  <Tag className="h-4 w-4" />
                  You save {formatRupees(savings)} on this order
                </p>
              )}

              <button
                onClick={() => {
                  setPlaced(true);
                  clear();
                }}
                className="mt-4 hidden w-full items-center justify-center gap-2 rounded-xl bg-coral-500 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-coral-600 md:flex"
              >
                Proceed to checkout <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile checkout bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3">
          <div className="flex-1">
            <div className="text-lg font-extrabold text-ink">
              {formatRupees(toPay)}
            </div>
            <div className="text-[11px] text-muted">
              {savings > 0
                ? `You save ${formatRupees(savings)}`
                : "Inclusive of all taxes"}
            </div>
          </div>
          <button
            onClick={() => {
              setPlaced(true);
              clear();
            }}
            className="flex items-center gap-2 rounded-xl bg-coral-500 px-6 py-3 text-sm font-bold text-white shadow-soft active:scale-[0.98]"
          >
            Checkout <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted">{label}</dt>
      <dd className={accent ? "font-semibold text-leaf-500" : "font-semibold text-ink"}>
        {value}
      </dd>
    </div>
  );
}
