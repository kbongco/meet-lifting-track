import { FormInputProps } from "@/Components/component-props";
import "./FormInput.scss";

export default function FormInput({ label, ...rest }: FormInputProps) {
  return (
    <div className="chbi-lifting-form-input-container">
      <label className="chbi-lifting-form-label">{label}</label>
      <input className="chbi-lifting-form-input" {...rest} />
    </div>
  );
}
