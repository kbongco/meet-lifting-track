import TableHeader from "./TableHeader/TableHeader";
import './Table.scss'
import TableBody from "./TableBody/TableBody";
import { mockAttempts, mockLifters } from "@/lib/mockdata";

export default function Table() {
  return (
<table className="chbi-lifting-table">
  <TableHeader /> 
  <TableBody lifterInfo={mockLifters} attempts={mockAttempts} />
</table>
  )
}