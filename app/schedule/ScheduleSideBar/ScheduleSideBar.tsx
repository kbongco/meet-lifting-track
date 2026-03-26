import ScheduleCards from '@/Components/ui/ScheduleCard/ScheduleCard';
import './ScheduleSideBar.scss';

export default function ScheduleSideBar() {
  return (
    <div className='chbi-lifting-sidebar'>
      <h1 className='chbi-lifting-sidebar-header'>Sessions</h1>
      <p className='chbi-lifting-sidebar-subtext'>2026 Nationals Feb 24-26</p>
      <ScheduleCards/>
    </div>
  )
}