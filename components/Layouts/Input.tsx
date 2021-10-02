import React from 'react';

interface Props {
  className: string;
  placeholder: string;
  type: string;
}

const Input = ({ props, ref }: { props: Props; ref: React.RefObject<HTMLInputElement> }) => {
  return (
    <input
      className={`border-b-2 w-full border-yellow-200 outline-none ${props.className}`}
      ref={ref}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
