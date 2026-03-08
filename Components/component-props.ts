export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: ButtonStyle;
}

export type ButtonStyle = "primary" | "secondary" | "good" | "bad" | "danger"
