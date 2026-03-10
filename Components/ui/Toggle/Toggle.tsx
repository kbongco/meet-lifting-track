import { ToggleProps } from "@/Components/component-props";
import './Toggle.scss';

export default function Toggle({ label, subLabel, isActive, onToggle }: ToggleProps) {
  return (
    <div className="chbi-toggle-row">
      <div>
        <div className="chbi-toggle-label">{label}</div>
        {subLabel && <div className="chbi-toggle-sub">{subLabel}</div>}
      </div>
      <label className="chbi-toggle" onClick={onToggle}>
        <input type="checkbox" readOnly checked={isActive} />
        <div className="chbi-toggle__track" />
        <div className="chbi-toggle__thumb" />
      </label>
    </div>
  )
}