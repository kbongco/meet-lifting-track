export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: ButtonStyle;
}

export interface BadgeProps {
  children: React.ReactNode;
  badgeType?: BadgeType;
}

export interface CardProps {
  children: React.ReactNode;
}

export interface CardHeaderProps {
  title: string;
  extraButton?: React.ReactNode;
}

export interface CardBodyProps {
  children: React.ReactNode;
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string;
}

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export interface Options {
  label: string;
  value: string;
}

export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  options: Options[]
  placeholder: string;
  label: string;
}

export type ButtonStyle = "primary" | "secondary" | "good" | "bad" | "danger"
export type BadgeType = 'success' | 'warning' | 'neutral' | 'danger' | 'completed'