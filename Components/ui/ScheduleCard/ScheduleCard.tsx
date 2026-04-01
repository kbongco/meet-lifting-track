import ScheduleProgress from '../ScheduleProgress/ScheduleProgress';
import ScheduleStatus from '../ScheduleStatus/ScheduleStatus';
import './ScheduleCard.scss';

export default function ScheduleCards() {
  return (
    <div className='chbi-lifting-schedule-card-container'>
      <div className='chbi-lifting-schedule-header-container'>
      <h1 className='chbi-lifting-schedule-header '>Session 1</h1>
        <ScheduleStatus />
        </div>
      <div className='chbi-lifting-schedule-info'>
        <p className='chbi-lifting-info'>Sun, Feb 23 · 8:00 AM</p>
        <p className='chbi-lifting-info'>F63 · M74 · Open Raw</p>
        <p className='chbi-lifting-info'>28 lifters · 2 platforms</p>
      </div>
      <ScheduleProgress/>
    </div>
  )
}