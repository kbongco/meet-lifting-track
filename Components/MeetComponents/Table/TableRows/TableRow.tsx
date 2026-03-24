export default function TableRow({
  place,
  name,
  lotNumber,
  bodyweight,
  attempts,
}: any) {
  const getAttempt = (liftType: string, round: number) =>
    attempts.find(
      (a: any) => a.liftType === liftType && a.roundNumber === round,
    );
  

  return (
    <tr>
      <td className={`col-place place-${place}`}>{place}</td>
      <td className="col-left col-name">{name}</td>
      <td className="col-mono col-muted">{lotNumber}</td>
      <td className="col-mono col-muted">{bodyweight}</td>
{/* Squat */}
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('squat', 1)?.status ?? 'empty'}`}>
    {getAttempt('squat', 1)?.weight}
  </span>
</td>
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('squat', 2)?.status ?? 'empty'}`}>
    {getAttempt('squat', 2)?.weight}
  </span>
</td>
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('squat', 3)?.status ?? 'empty'}`}>
    {getAttempt('squat', 3)?.weight}
  </span>
</td>

{/* Bench */}
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('bench', 1)?.status ?? 'empty'}`}>
    {getAttempt('bench', 1)?.weight}
  </span>
</td>
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('bench', 2)?.status ?? 'empty'}`}>
    {getAttempt('bench', 2)?.weight}
  </span>
</td>
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('bench', 3)?.status ?? 'empty'}`}>
    {getAttempt('bench', 3)?.weight}
  </span>
</td>

{/* Deadlift */}
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('deadlift', 1)?.status ?? 'empty'}`}>
    {getAttempt('deadlift', 1)?.weight}
  </span>
</td>
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('deadlift', 2)?.status ?? 'empty'}`}>
    {getAttempt('deadlift', 2)?.weight}
  </span>
</td>
<td>
  <span className={`chbi-attempt-cell chbi-attempt-cell--${getAttempt('deadlift', 3)?.status ?? 'empty'}`}>
    {getAttempt('deadlift', 3)?.weight}
  </span>
</td>

{/* Total + Wilks — hardcoded for now */}
<td className="col-total">—</td>
<td className="col-wilks">—</td>
    </tr>
  );
}
