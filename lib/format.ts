export function formatRupees(value: number): string {
  return "₹" + value.toLocaleString("en-IN");
}

export function discountPercent(mrp: number, price: number): number {
  if (mrp <= 0 || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "2026-06-20" → "20 Jun 2026". Parsed manually so SSR/CSR stay identical. */
export function formatShortDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
