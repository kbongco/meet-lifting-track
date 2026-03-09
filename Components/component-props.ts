export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: ButtonStyle;
}

export interface BadgeProps {
  children: React.ReactNode;
  badgeType?: BadgeType;
}

export type ButtonStyle = "primary" | "secondary" | "good" | "bad" | "danger"
export type BadgeType = 'success' | 'warning' | 'neutral' | 'danger'