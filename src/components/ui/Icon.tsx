import {
  Home,
  Droplets,
  Building2,
  Layers,
  Factory,
  Wheat,
  Leaf,
  Trophy,
  Shield,
  Clock,
  Recycle,
  Thermometer,
  Sun,
  Wrench,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  Zap,
  Target,
  Award,
  FileText,
  Users,
  Globe,
  Heart,
  Umbrella,
  Flame,
  Wind,
  Mountain,
  Waves,
  Hammer,
  HardHat,
  PaintBucket,
  Ruler,
  Gauge,
  CircleCheck,
  ExternalLink,
  MessageCircle,
  type LucideProps,
} from 'lucide-react'
import { type ForwardRefExoticComponent, type RefAttributes } from 'react'

type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>

const iconMap: Record<string, LucideIcon> = {
  Home,
  Droplets,
  Building2,
  Layers,
  Factory,
  Wheat,
  Leaf,
  Trophy,
  Shield,
  Clock,
  Recycle,
  Thermometer,
  Sun,
  Wrench,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  Zap,
  Target,
  Award,
  FileText,
  Users,
  Globe,
  Heart,
  Umbrella,
  Flame,
  Wind,
  Mountain,
  Waves,
  Hammer,
  HardHat,
  PaintBucket,
  Ruler,
  Gauge,
  CircleCheck,
  ExternalLink,
  MessageCircle,
}

interface IconProps {
  name: string
  className?: string
  size?: number
}

export function Icon({ name, className, size = 24 }: IconProps): React.JSX.Element | null {
  const LucideIcon = iconMap[name]

  if (!LucideIcon) {
    // Unknown icon name — render nothing rather than crashing
    return null
  }

  return <LucideIcon size={size} className={className} aria-hidden="true" />
}

// Re-export the map so consumers can check valid names at runtime
export const validIconNames = Object.keys(iconMap) as string[]
