import { CardProps } from "@/Components/component-props";

export function Card({ children }: CardProps) {
  return (
    <div className='chbi-lifting-card'>
      {children}
    </div>
  )
}


export function CardHeader() {}
export function CardBody() {}