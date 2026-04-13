import "./ScheduleBlock.scss";

export default function ScheduleBlock() {
  return (
    <div className="chbi-lifting-schedule-info">
      <div className="chbi-lifting-circle-time">
        <p>7:00Am</p>
        <div className="chbi-lifting-circle-div">
          <span className="chbi-lifting-circle-status"></span>
          <hr className="chbi-lifting-vert-line" />
        </div>
        <div className="chbi-lifting-schedule-info-container">
          <h1>This is the schedule Block</h1>
        </div>
      </div>
    </div>
  );
}
