"use client";

import { Loader2 } from "lucide-react";
import { useAdmin } from "@/lib/admin/store";
import { AdminShell } from "./AdminShell";
import { Login } from "./Login";

/**
 * Decides what the /admin area shows:
 *  • before localStorage is read → a brief spinner (avoids an auth flash)
 *  • not signed in → the login screen
 *  • signed in → the full shell with the routed page inside
 */
export function AdminGate({ children }: { children: React.ReactNode }) {
  const { hydrated, authed } = useAdmin();

  if (!hydrated) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#faf7f5]">
        <Loader2 className="h-7 w-7 animate-spin text-sea-500" />
      </div>
    );
  }

  if (!authed) return <Login />;

  return <AdminShell>{children}</AdminShell>;
}
