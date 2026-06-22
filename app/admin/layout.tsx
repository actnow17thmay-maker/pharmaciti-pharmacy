import type { Metadata } from "next";
import { AdminProvider } from "@/lib/admin/store";
import { AdminGate } from "@/components/admin/AdminGate";

export const metadata: Metadata = {
  title: "Admin · Pharmaciti Pharmacy",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      <AdminGate>{children}</AdminGate>
    </AdminProvider>
  );
}
