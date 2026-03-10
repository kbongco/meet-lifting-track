import { SelectInputProps } from "@/Components/component-props";
import './FormSelect.scss'


export default function FormSelect({label, options, placeholder, ...rest }: SelectInputProps) {
  return (
    <div className='chbi-form-select-container'>
      <label className='chbi-form-select-label'>
        {label}
      </label>
      <select className='chbi-form-select' {...rest}>
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}