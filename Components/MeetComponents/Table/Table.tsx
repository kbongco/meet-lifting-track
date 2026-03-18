import TableHeader from "./TableHeader/TableHeader";
import './Table.scss'
import TableBody from "./TableBody/TableBody";

export default function Table() {
  return (
    <div className='chbi-lifting-table'>
      <TableHeader />
      <TableBody/>
    </div>
  )
}