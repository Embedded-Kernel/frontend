const Button = (props: Record<string, string>) => {
  return (
    <button className="col-span-4 border-2 border-yellow-300 h-8 mr-4 mt-4 w-32">
      {props.name}
    </button>
  );
};
export default Button;
