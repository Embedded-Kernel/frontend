import React from 'react';
type InputProps = React.HTMLProps<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={`border w-80 p-2 rounded-md border-gray-300 outline-none ${props.className}`} ref={ref} type={props.type} placeholder={props.placeholder}/>;
})
export default Input;
