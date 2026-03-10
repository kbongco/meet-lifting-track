import { CardBodyProps, CardHeaderProps, CardProps } from "@/Components/component-props";
import './Card.scss'


export function Card({ children }: CardProps) {
  return (
    <div className='chbi-lifting-card'>
      {children}
    </div>
  )
}


export function CardHeader({ title, extraButton }: CardHeaderProps) {
  return (
    <header className='chbi-lifting-card__header'>
      {title}
      {extraButton}
    </header>
  )
}


export function CardBody({ children }: CardBodyProps) {
  return (
    <section className='chbi-lifting-card__body'>
      {children}
    </section>
  )
}