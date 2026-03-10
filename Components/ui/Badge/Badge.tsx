import { BadgeProps } from "@/Components/component-props";
import './Badge.scss';

export default function Badge({ children, badgeType }: BadgeProps) {
  return (
    <span className={`chbi-lifting-span chbi-lifting-span--${badgeType ?? 'neutral'}`}>
      {children}
      </span>

  )
}