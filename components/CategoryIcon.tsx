import {
  Pill,
  FlaskConical,
  HeartPulse,
  Sparkles,
  Baby,
  PawPrint,
  Activity,
  Stethoscope,
  Venus,
  Mars,
  Apple,
  Smile,
  Scissors,
  Droplet,
  Thermometer,
  Dumbbell,
  Leaf,
  BriefcaseMedical,
  Heart,
  Accessibility,
  Gem,
  Bandage,
  Brain,
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
  women: Venus,
  men: Mars,
  skin: Sparkles,
  food: Apple,
  oral: Smile,
  hair: Scissors,
  diabetes: Droplet,
  cold: Thermometer,
  protein: Dumbbell,
  homeopathy: Leaf,
  firstaid: BriefcaseMedical,
  sexual: Heart,
  elderly: Accessibility,
  beauty: Gem,
  surgicals: Bandage,
  mental: Brain,
};

/** All selectable icon keys (handy for admin pickers). */
export const ICON_KEYS = Object.keys(MAP) as IconKey[];

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
