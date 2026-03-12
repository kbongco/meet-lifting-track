import Button from "../ui/Button/Button";
import FormSelect from "../ui/Form/FormSelect";
import "./MeetHeader.scss";

export default function MeetHeader() {
  const flightsObject = ["Flight A", "Flight B", "Flight C"].map((flight) => ({
    label: flight,
    value: flight,
  }));

  const weightClassObject = ["W-90kg", "W-100kg", "W-100+kg", "M-90", "M-100", "M-110"].map((weight) => ({
    label: weight,
    value: weight
  }))
  return (
    <div className="chbi-meet-header-container">
      <h1 className="chbi-meet-header-text">Meet Results </h1>
      <div className='chbi-meet-header-all-buttons'>
      <div className="chbi-meet-header-dropdown-container">
        <FormSelect
          options={flightsObject}
          placeholder="All flights"
        />
          <FormSelect
          options={weightClassObject}
          placeholder="Current weight classes"
        />
      </div>
      <div className="chbi-meet-header-button-container">
        <Button buttonStyle="secondary">Export CSV</Button>
        <Button buttonStyle="secondary">Export PDF</Button>
        </div>
        </div>
    </div>
  );
}
