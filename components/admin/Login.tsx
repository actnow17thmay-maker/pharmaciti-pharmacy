"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, ShieldCheck, User } from "lucide-react";
import { Logo } from "@/components/Logo";
import { DEMO_PASS, DEMO_USER, useAdmin } from "@/lib/admin/store";
import { Button, Field } from "./ui";

export function Login() {
  const { signIn } = useAdmin();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [reveal, setReveal] = useState(false);
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!signIn(user, pass)) setError(true);
  }

  return (
    <div className="bg-app-header grid min-h-screen place-items-center px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex justify-center">
          <Logo variant="light" />
        </div>

        <form
          onSubmit={submit}
          className="animate-fade-up rounded-3xl border border-hairline bg-white p-6 shadow-card md:p-7"
        >
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sea-50 text-sea-600">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <h1 className="mt-3 text-xl font-extrabold tracking-tight text-ink">
            Admin Panel
          </h1>
          <p className="mt-0.5 text-sm text-muted">
            Sign in to manage your store.
          </p>

          <div className="mt-5 space-y-4">
            <Field label="Username">
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted" />
                <input
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                    setError(false);
                  }}
                  autoComplete="username"
                  placeholder="admin"
                  className="w-full rounded-xl border border-hairline bg-white py-2.5 pl-10 pr-3.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-sea-400 focus:ring-2 focus:ring-sea-200"
                />
              </div>
            </Field>

            <Field label="Password">
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted" />
                <input
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                    setError(false);
                  }}
                  type={reveal ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••"
                  className="w-full rounded-xl border border-hairline bg-white py-2.5 pl-10 pr-11 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-sea-400 focus:ring-2 focus:ring-sea-200"
                />
                <button
                  type="button"
                  onClick={() => setReveal((v) => !v)}
                  aria-label={reveal ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-muted transition hover:bg-hairline/60 hover:text-ink"
                >
                  {reveal ? (
                    <EyeOff className="h-[18px] w-[18px]" />
                  ) : (
                    <Eye className="h-[18px] w-[18px]" />
                  )}
                </button>
              </div>
            </Field>
          </div>

          {error && (
            <p className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-[13px] font-semibold text-rose-600">
              Incorrect username or password.
            </p>
          )}

          <Button type="submit" className="mt-5 w-full">
            Sign in
          </Button>

          <button
            type="button"
            onClick={() => {
              setUser(DEMO_USER);
              setPass(DEMO_PASS);
              setError(false);
            }}
            className="mt-3 w-full rounded-xl border border-dashed border-hairline px-3 py-2.5 text-[12px] text-muted transition hover:border-sea-200 hover:text-ink"
          >
            Demo login —{" "}
            <span className="font-bold text-ink">{DEMO_USER}</span> /{" "}
            <span className="font-bold text-ink">{DEMO_PASS}</span>{" "}
            <span className="text-sea-600">(tap to fill)</span>
          </button>
        </form>
      </div>
    </div>
  );
}
