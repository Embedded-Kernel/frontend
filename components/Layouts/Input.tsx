import React from 'react';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={`col-span-12 w-full border md:border w-80 p-2 rounded-md border-gray-300 outline-none ${props.className}`} ref={ref} type={props.type} placeholder={props.placeholder}/>;
})
export default Input;
