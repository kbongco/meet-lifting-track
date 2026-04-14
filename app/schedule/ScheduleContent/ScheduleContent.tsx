import ScheduleBlock from "../ScheduleBlock/ScheduleBlock";
import { mockTimelineBlocks } from "@/lib/mockdata";

export default function ScheduleContent() {
  return (
    <>
      <h1>Sunday February 23 2026</h1>
      <p>Day 1 of 2 · 3 sessions · 2026 USAPL Nationals</p>
      {mockTimelineBlocks.map((mock) => (
        <ScheduleBlock
          id={mock.id}
          time={mock.time}
          status={mock.status}
          title={mock.title}
          divisions={mock.divisions}
          lifterCount={mock.lifterCount}
          platformCount={mock.platformCount}
          room={mock.room}
          duration={mock.duration}
          actualDuration={mock.actualDuration}
          estimatedEnd={mock.estimatedEnd}
          progress={mock.progress}
          flights={mock.flights}
        />
      ))}
      {/* <ScheduleBlock/> */}
    </>
  )
}