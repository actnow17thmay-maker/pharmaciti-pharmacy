"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  HeartPulse,
  ClipboardList,
  ShoppingBag,
  FileUp,
  type LucideProps,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

type Item = {
  href: string;
  label: string;
  icon: React.ComponentType<LucideProps>;
  match?: (path: string) => boolean;
  badge?: boolean;
};

const ITEMS: Item[] = [
  { href: "/", label: "Home", icon: Home, match: (p) => p === "/" },
  {
    href: "/products",
    label: "Health Plans",
    icon: HeartPulse,
    match: (p) => p.startsWith("/products"),
  },
  {
    href: "/orders",
    label: "My Orders",
    icon: ClipboardList,
    match: (p) => p.startsWith("/orders"),
  },
  {
    href: "/cart",
    label: "Cart",
    icon: ShoppingBag,
    match: (p) => p === "/cart",
    badge: true,
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white md:hidden">
      <div className="mx-auto grid max-w-[1200px] grid-cols-5 items-end px-1 pb-2 pt-2">
        {ITEMS.slice(0, 2).map((it) => (
          <NavLink
            key={it.label}
            item={it}
            active={!!it.match?.(pathname)}
            count={itemCount}
          />
        ))}

        {/* elevated centre action */}
        <Link href="/prescription" className="flex flex-col items-center">
          <span className="-mt-7 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-sea-400 to-sea-600 text-white shadow-soft ring-4 ring-white">
            <FileUp className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="mt-1 text-[10px] font-semibold text-sea-600">
            Upload Rx
          </span>
        </Link>

        {ITEMS.slice(2).map((it) => (
          <NavLink
            key={it.label}
            item={it}
            active={!!it.match?.(pathname)}
            count={itemCount}
          />
        ))}
      </div>
    </nav>
  );
}

function NavLink({
  item,
  active,
  count,
}: {
  item: Item;
  active: boolean;
  count: number;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className={`flex flex-col items-center gap-0.5 py-1 text-[10px] font-semibold transition ${
        active ? "text-sea-600" : "text-muted"
      }`}
    >
      <span
        className={`relative grid h-9 w-9 place-items-center rounded-full transition ${
          active
            ? "bg-sea-50 text-sea-600 shadow-[0_0_12px_2px_rgba(246,95,67,0.5)]"
            : "text-muted"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.9} />
        {item.badge && count > 0 && (
          <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-sea-500 px-1 text-[9px] font-bold text-white">
            {count}
          </span>
        )}
      </span>
      {item.label}
    </Link>
  );
}
