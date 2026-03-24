import { TableBodyProps } from "@/Components/component-props";
import TableRow from "../TableRows/TableRow";import _ from 'lodash'



export default function TableBody({ lifterInfo, attempts }: TableBodyProps) {
  console.log(lifterInfo, 'info');

  const grouped = _.groupBy(lifterInfo, (lifter) =>
  `${lifter.sex}${lifter.weightClass} · ${lifter.division}`
)
  console.log(grouped,'groupie')
  return (
    <tbody>
  <tr className="chbi-results-division-header">
    <td colSpan={15}>M93 · Open Raw</td>
      </tr>
{Object.entries(grouped).map(([groupKey, groupLifters]) => (
  <>
    <tr className="chbi-results-division-header">
      <td colSpan={15}>{groupKey}</td>
    </tr>
    {groupLifters.map((lifter) => {
      const lifterAttempts = attempts.filter(a => a.lifterId === lifter.id)
      return (
        <TableRow
          key={lifter.id}
          place={1}
          name={lifter.name}
          lotNumber={lifter.lotNumber}
          bodyweight={lifter.bodyweight}
          attempts={lifterAttempts}
        />
      )
    })}
  </>
))}

</tbody>
  )
}