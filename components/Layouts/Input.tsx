import React from 'react';
type InputProps = React.HTMLProps<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={`border-b-2 w-full border-yellow-200 outline-none ${props.className}`} ref={ref} type={props.type} placeholder={props.placeholder}/>;
})
export default Input;
