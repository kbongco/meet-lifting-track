import { FormInputProps } from "@/Components/component-props";

export default function FormInput({...rest}: FormInputProps) {
  return (
    <input{...rest}>
    </input>
  )
}