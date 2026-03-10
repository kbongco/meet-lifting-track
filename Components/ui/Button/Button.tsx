import './Button.scss';
import { ButtonProps } from '@/Components/component-props';

export default function Button({children, buttonStyle, ...rest}:ButtonProps) {
  return (
    <button className={`chbi-lift-button chbi-lift-button--${buttonStyle}`}
    {...rest}>{children}</button>
  )
}