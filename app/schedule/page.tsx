import ScheduleContent from "./ScheduleContent/ScheduleContent"
import ScheduleSideBar from "./ScheduleSideBar/ScheduleSideBar"
import './schedule.scss'
export default function ScheduleView() {
  return (
    <div className='chbi-lifting-schedule'>
      <div className='chbi-lifting-sidebar'>
        <ScheduleSideBar />
        </div>
      <div className='chbi-lifting-schedule-content'>
        <ScheduleContent/>
      </div>
      {/* <h1>This is the schedule view</h1> */}
    </div>
)
}