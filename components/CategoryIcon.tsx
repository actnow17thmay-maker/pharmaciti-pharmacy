import {
  Pill,
  FlaskConical,
  HeartPulse,
  Sparkles,
  Baby,
  PawPrint,
  Activity,
  Stethoscope,
  type LucideProps,
} from "lucide-react";
import type { IconKey } from "@/lib/products";

const MAP: Record<IconKey, React.ComponentType<LucideProps>> = {
  pill: Pill,
  flask: FlaskConical,
  heart: HeartPulse,
  sparkles: Sparkles,
  baby: Baby,
  paw: PawPrint,
  device: Activity,
  consult: Stethoscope,
};

export function CategoryIcon({
  iconKey,
  className,
  strokeWidth = 1.8,
}: {
  iconKey: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = MAP[iconKey] ?? Pill;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
