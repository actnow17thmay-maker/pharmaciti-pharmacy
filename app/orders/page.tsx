import Link from "next/link";
import {
  CircleCheck,
  Truck,
  Clock,
  RotateCcw,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

type OrderStatus = "delivered" | "out-for-delivery" | "processing";

type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  items: { name: string; qty: number }[];
  total: number;
};

const STATUS: Record<
  OrderStatus,
  { label: string; Icon: LucideIcon; tint: string }
> = {
  delivered: { label: "Delivered", Icon: CircleCheck, tint: "bg-[#eaf6ef] text-leaf-500" },
  "out-for-delivery": { label: "Out for delivery", Icon: Truck, tint: "bg-sky-100 text-sky-500" },
  processing: { label: "Processing", Icon: Clock, tint: "bg-sea-50 text-sea-600" },
};

const ORDERS: Order[] = [
  {
    id: "Order #PHC-10460",
    date: "15 Jun 2026",
    status: "processing",
    items: [
      { name: "Blood Pressure Monitor", qty: 1 },
      { name: "Digital Thermometer", qty: 1 },
    ],
    total: 1698,
  },
  {
    id: "Order #PHC-10455",
    date: "14 Jun 2026",
    status: "out-for-delivery",
    items: [
      { name: "Whey Protein Powder 1kg", qty: 1 },
      { name: "Daily Multivitamin", qty: 1 },
    ],
    total: 1648,
  },
  {
    id: "Order #PHC-10428",
    date: "12 Jun 2026",
    status: "delivered",
    items: [
      { name: "Dolo 650 Tablet", qty: 2 },
      { name: "Cetirizine 10mg", qty: 1 },
      { name: "Digene Antacid Tablets", qty: 1 },
    ],
    total: 102,
  },
];

export default function OrdersPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Header variant="inner" title="My Orders" />

      <main className="px-4 pb-36 pt-4 md:px-6 md:pb-16">
        <div className="space-y-3">
          {ORDERS.map((order) => {
            const s = STATUS[order.status];
            return (
              <div
                key={order.id}
                className="rounded-2xl border border-hairline bg-white p-4 shadow-card"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${s.tint}`}
                  >
                    <s.Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold text-ink">{order.id}</p>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${s.tint}`}
                      >
                        {s.label}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-muted">
                      Placed on {order.date}
                    </p>
                  </div>
                </div>

                <ul className="mt-3 space-y-1">
                  {order.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-center justify-between gap-3 text-[12px]"
                    >
                      <span className="min-w-0 truncate text-ink-soft">
                        {it.name}
                      </span>
                      <span className="shrink-0 text-muted">×{it.qty}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex items-center justify-between border-t border-hairline pt-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-muted">
                      Total
                    </p>
                    <p className="text-sm font-extrabold text-ink">
                      ₹{order.total}
                    </p>
                  </div>
                  {order.status === "delivered" ? (
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-sea-500 px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-sea-600"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Buy again
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-xl border border-hairline bg-white px-4 py-2 text-xs font-bold text-ink transition hover:bg-sea-50/40"
                    >
                      Track order
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/products"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-hairline bg-white py-3 text-sm font-bold text-ink shadow-card transition hover:bg-sea-50/40"
        >
          Continue shopping
          <ChevronRight className="h-4 w-4 text-sea-500" />
        </Link>

        <p className="mt-4 text-center text-[11px] text-muted">
          Demo order history — orders &amp; tracking are illustrative only.
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
