export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: ButtonStyle;
}

export interface BadgeProps {
  children: React.ReactNode;
  badgeType?: BadgeType;
}

export interface CardProps {
  CardHeader: CardHeaderProps;
  CardBody: CardBodyProps;
  children: React.ReactNode;
}

export interface CardHeaderProps {
  title: React.ReactNode;
  extraButton?: React.ReactNode;
}

export interface CardBodyProps {
  body: React.ReactNode;
}

export type ButtonStyle = "primary" | "secondary" | "good" | "bad" | "danger"
export type BadgeType = 'success' | 'warning' | 'neutral' | 'danger'