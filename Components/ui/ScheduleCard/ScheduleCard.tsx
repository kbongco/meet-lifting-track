import { ScheduleCardProps } from '@/Components/component-props';
import Badge from '../Badge/Badge';
import ScheduleProgress from '../ScheduleProgress/ScheduleProgress';
import './ScheduleCard.scss';

export default function ScheduleCards({sessionNumber, scheduleDate, weightDivision, totalLifters, totalPlatforms}:ScheduleCardProps) {
  return (
    <div className='chbi-lifting-schedule-card-container'>
      <div className='chbi-lifting-schedule-header-container'>
        <h1 className='chbi-lifting-schedule-header '>{sessionNumber}</h1>
        {/* <ScheduleStatus /> */}
        <Badge
        children='done'/>
        </div>
      <div className='chbi-lifting-schedule-info'>
        <p className='chbi-lifting-info'>{scheduleDate}</p>
        <p className='chbi-lifting-info'>{weightDivision}</p>
        <p className='chbi-lifting-info'>{totalLifters} lifters · {totalPlatforms} platforms</p>
      </div>
      <ScheduleProgress/>
    </div>
  )
}