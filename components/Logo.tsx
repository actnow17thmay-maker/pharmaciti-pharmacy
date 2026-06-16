type Props = {
  variant?: "light" | "brand";
  className?: string;
};

/**
 * Client-supplied Pharmaciti logo (full lockup: mark + wordmark), served from
 * /public. `brand` sits directly on light surfaces (header, footer). `light`
 * is for coloured surfaces (e.g. the orange welcome hero) and rides on a white
 * chip so the dark-green wordmark stays readable.
 */
export function Logo({ variant = "light", className }: Props) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/pharmaciti-logo.png"
      alt="Pharmaciti Pharmacy"
      width={1431}
      height={335}
      className="h-9 w-auto md:h-10"
    />
  );

  if (variant === "light") {
    return (
      <span
        className={`inline-flex items-center rounded-2xl bg-white px-3 py-2 shadow-sm ${
          className ?? ""
        }`}
      >
        {img}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>{img}</span>
  );
}
