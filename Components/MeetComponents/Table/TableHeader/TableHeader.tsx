// column structure
const liftGroups = [
  { label: 'Squat', className: 'group-squat', span: 3 },
  { label: 'Bench', className: 'group-bench', span: 3 },
  { label: 'Deadlift', className: 'group-deadlift', span: 3 },
]

const singleCols = ['Pl', 'Name', 'Lot', 'BW']
const endCols = ['Total', 'DOTs']
const attemptCols = ['1', '2', '3']

export default function TableHeader() {
  return (
    <thead>

      <tr className='chbi-results-table__group-row'>
        {singleCols.map(col => (
          <th key={col} className='col-left'>{col === 'Pl' || col === 'Lot' || col === 'BW' ? '' : col}</th>
        ))}
        {liftGroups.map(group => (
          <th key={group.label} colSpan={group.span} className={group.className}>
            {group.label}
          </th>
        ))}
        {endCols.map(col => (
          <th key={col}></th>
        ))}
      </tr>


      <tr className='chbi-results-table__col-row'>
        {singleCols.map(col => (
          <th key={col} className='col-left'>{col}</th>
        ))}
        {liftGroups.map(group =>
          attemptCols.map(attempt => (
            <th key={`${group.label}-${attempt}`}>{attempt}</th>
          ))
        )}
        {endCols.map(col => (
          <th key={col}>{col}</th>
        ))}
      </tr>
    </thead>
  )
}