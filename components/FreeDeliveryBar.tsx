import { Truck, BadgeCheck } from "lucide-react";

export function FreeDeliveryBar() {
  return (
    <div className="fixed inset-x-0 bottom-[66px] z-30 px-3 md:hidden">
      <div className="mx-auto max-w-[1200px] rounded-2xl bg-deep-700 px-4 py-2.5 text-white shadow-lg">
        <div className="flex items-center gap-2 text-[12px] font-semibold">
          <BadgeCheck className="h-4 w-4 shrink-0 text-leaf-400" />
          <span>No minimum order value</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-white/85">
          <Truck className="h-3.5 w-3.5 shrink-0" />
          <span>Free home delivery on every order</span>
        </div>
      </div>
    </div>
  );
}
