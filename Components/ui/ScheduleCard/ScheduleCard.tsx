import { ScheduleCardProps } from '@/Components/component-props';
import Badge from '../Badge/Badge';
import ScheduleProgress from '../ScheduleProgress/ScheduleProgress';
import './ScheduleCard.scss';

export default function ScheduleCards({ sessionNumber, scheduleDate, weightDivision, totalLifters, totalPlatforms, status }: ScheduleCardProps) {
    function specifyBadgeType(status?:string) {
    switch (status) {
      case "done":
        return "success"
      case "live":
        return "completed"
      case "upcoming":
        return "neutral"
      default:
        return "neutral"
    }
  }
  return (
    <div className='chbi-lifting-schedule-card-container'>
      <div className='chbi-lifting-schedule-header-container'>
        <h1 className='chbi-lifting-schedule-header '>{sessionNumber.split('—')[0].trim()}</h1>
        <Badge
          children={status}
          badgeType={specifyBadgeType(status)} />
        </div>
      <div className='chbi-lifting-schedule-info'>
        <p className='chbi-lifting-info'>{scheduleDate}</p>
        <p className='chbi-lifting-info'>{weightDivision.replace(/^Session \d+\s*—\s*/, '')}</p>
        <p className='chbi-lifting-info'>{totalLifters} lifters · {totalPlatforms} platforms</p>
      </div>
      <ScheduleProgress/>
    </div>
  )
}