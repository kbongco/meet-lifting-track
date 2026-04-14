import Badge from "@/Components/ui/Badge/Badge";
import "./ScheduleBlock.scss";
import { ScheduleBockProps } from "@/Components/component-props";
import { TimelineBlock } from "@/types/schedule";

export default function ScheduleBlock({
  time,
  status,
  title,
  divisions,
  lifterCount,
  platformCount,
  room,
  duration,
  actualDuration,
  estimatedEnd,
  progress,
  flights,
}: TimelineBlock) {
  return (
    <div className="chbi-lifting-schedule-info">
      <div className="chbi-lifting-circle-time">
        <p>{time}</p>
        <div className="chbi-lifting-circle-div">
          <span className="chbi-lifting-circle-status" />
          <hr className="chbi-lifting-vert-line" />
        </div>
        <div className="chbi-lifting-schedule-info-container">
          <div className="chbi-lifting-schedule-title">
            <h1 className="chbi-lifting-title">{title}</h1>
            <Badge children={status} badgeType="success" />
          </div>
          <div className="chbi-lifting-schedule-info-text-container">
            <p className="chbi-lifting-schedule-athletes">{divisions}</p>
            <div className="chbi-lifting-schedule-extra-text">
              <p className="chbi-lifting-schedule-athletes">Duration: </p>
              <p className="chbi-lifting-secondary-text">&nbsp;{duration}</p>
              <p className="chbi-lifting-schedule-athletes">&nbsp; Room: </p>
              <p className="chbi-lifting-secondary-text">&nbsp;{room} </p>
            </div>
          </div>
          <div className="chbi-lifting-info-flight-information">
            <div className="chbi-lifting-info-badges">
              <Badge
                children={"Platform 1 Flight A 14 Lifters Sq R3"}
                badgeType="success"
              />
              <Badge
                children={"Platform 2 Flight B Bp R2"}
                badgeType="success"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
