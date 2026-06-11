import { Plus, Leaf } from "lucide-react";

type Props = {
  variant?: "light" | "brand";
  showText?: boolean;
  className?: string;
};

/**
 * Pharmaciti mark = medical cross + leaf. `light` sits on the sea header,
 * `brand` uses the green brand colours for white surfaces. Swap freely later
 * if the client supplies an exact logo asset.
 */
export function Logo({ variant = "light", showText = true, className }: Props) {
  const onColor = variant === "light";
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span
        className={`relative grid h-9 w-9 place-items-center rounded-xl shadow-sm ${
          onColor
            ? "bg-white"
            : "bg-gradient-to-br from-brand-500 to-brand-700"
        }`}
      >
        <Plus
          className={onColor ? "text-sea-500" : "text-white"}
          strokeWidth={3.2}
          size={20}
        />
        <Leaf
          className="absolute -right-1 -top-1 h-3.5 w-3.5 rotate-45 text-leaf-500"
          fill="currentColor"
          strokeWidth={0}
        />
      </span>
      {showText && (
        <span className="leading-none">
          <span
            className={`block text-[17px] font-extrabold tracking-tight ${
              onColor ? "text-white" : "text-brand-700"
            }`}
          >
            pharmaciti
          </span>
          <span
            className={`block text-[8px] font-bold tracking-[0.38em] ${
              onColor ? "text-white/80" : "text-leaf-500"
            }`}
          >
            PHARMACY
          </span>
        </span>
      )}
    </div>
  );
}
