"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  HeartPulse,
  FlaskConical,
  User,
  Stethoscope,
  type LucideProps,
} from "lucide-react";

type Item = {
  href: string;
  label: string;
  icon: React.ComponentType<LucideProps>;
  match?: (path: string) => boolean;
};

const ITEMS: Item[] = [
  { href: "/", label: "Home", icon: Home, match: (p) => p === "/" },
  { href: "/products", label: "Health Plans", icon: HeartPulse },
  {
    href: "/products?cat=lab-tests",
    label: "Lab Tests",
    icon: FlaskConical,
    match: (p) => p.startsWith("/products"),
  },
  { href: "/cart", label: "Profile", icon: User, match: (p) => p === "/cart" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white md:hidden">
      <div className="mx-auto grid max-w-[1200px] grid-cols-5 items-end px-1 pb-2 pt-2">
        {ITEMS.slice(0, 2).map((it) => (
          <NavLink key={it.label} item={it} active={!!it.match?.(pathname)} />
        ))}

        {/* elevated centre action */}
        <Link href="/products" className="flex flex-col items-center">
          <span className="-mt-7 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-coral-400 to-coral-600 text-white shadow-soft ring-4 ring-white">
            <Stethoscope className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="mt-1 text-[10px] font-semibold text-coral-600">
            Care Plan
          </span>
        </Link>

        {ITEMS.slice(2).map((it) => (
          <NavLink key={it.label} item={it} active={!!it.match?.(pathname)} />
        ))}
      </div>
    </nav>
  );
}

function NavLink({ item, active }: { item: Item; active: boolean }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className={`flex flex-col items-center gap-1 py-1 text-[10px] font-semibold transition ${
        active ? "text-coral-600" : "text-muted"
      }`}
    >
      <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.9} />
      {item.label}
    </Link>
  );
}
