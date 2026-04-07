import ScheduleCards from '@/Components/ui/ScheduleCard/ScheduleCard';
import './ScheduleSideBar.scss';
import { mockSessions } from '@/lib/mockdata';

export default function ScheduleSideBar() {
  console.log(mockSessions);
  return (
    <div className='chbi-lifting-sidebar'>
      <h1 className='chbi-lifting-sidebar-header'>Sessions</h1>
      <p className='chbi-lifting-sidebar-subtext'>2026 Nationals Feb 24-26</p>
      {/* <ScheduleCards/> */}
      {mockSessions.map((mock) => ( 
        <ScheduleCards
          sessionNumber={mock.name}
          scheduleDate={mock.startTime}
          weightDivision={mock.name}
          totalLifters={mock.lifterCount}
          totalPlatforms={mock.platformIds.length}
          status={mock.status}
        />
      ))}
    </div>
  )
}