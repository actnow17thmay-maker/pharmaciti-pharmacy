import { CalendarClock } from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function AppointmentPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Header variant="inner" title="Doctors Appointment" />

      <main className="px-4 pb-36 pt-4 md:px-6 md:pb-16">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-sea-100 bg-sea-50/70 px-6 py-16 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm">
            <CalendarClock className="h-8 w-8 text-sea-500" />
          </span>
          <h1 className="text-lg font-bold text-ink">
            Book a doctor&apos;s appointment
          </h1>
          <p className="max-w-xs text-sm text-muted">
            Online consultations with verified doctors are coming soon. You&apos;ll
            be able to pick a slot and consult right from here.
          </p>
          <span className="mt-1 rounded-full bg-sea-500 px-5 py-2 text-sm font-bold text-white">
            Coming soon
          </span>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
