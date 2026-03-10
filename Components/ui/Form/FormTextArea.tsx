import { FormTextareaProps } from "@/Components/component-props";
import './FormTextArea.scss'

export default function FormTextArea({label, ...rest} :FormTextareaProps) {
  return (
    <div className='chbi-form-text-container'>
      <label className='chbi-form-text-area-label'>{label}</label>
      <textarea  className='chbi-form-text-area' {...rest}/>
    </div>
  )
}