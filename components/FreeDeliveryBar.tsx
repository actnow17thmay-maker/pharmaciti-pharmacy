"use client";

import { Truck, PartyPopper } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatRupees } from "@/lib/format";

export function FreeDeliveryBar() {
  const { subtotal, remainingForFreeDelivery, hasFreeDelivery, freeDeliveryThreshold } =
    useCart();

  const progress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  return (
    <div className="fixed inset-x-0 bottom-[66px] z-30 px-3 md:hidden">
      <div className="mx-auto max-w-[1200px] rounded-2xl bg-maroon-700 px-4 py-2.5 text-white shadow-lg">
        <div className="flex items-center gap-2 text-[12px] font-semibold">
          {hasFreeDelivery ? (
            <>
              <PartyPopper className="h-4 w-4 shrink-0 text-leaf-400" />
              <span>You&apos;ve unlocked Free Delivery!</span>
            </>
          ) : (
            <>
              <Truck className="h-4 w-4 shrink-0 text-white/90" />
              <span>
                Add items worth{" "}
                <b>{formatRupees(remainingForFreeDelivery)}</b> to unlock{" "}
                <b>Free Delivery</b>
              </span>
            </>
          )}
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-leaf-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
