import { type ButtonHTMLAttributes } from "react";

type Variant = 'primary' | 'secondary' | 'outline'; 

const Button = (props: {
  label?: string,
  variant? : Variant
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { variant, disabled, className, label, children, ...otherProps } = props
  
  const primary = "text-neutral-200 bg-neutral-950 hover:bg-black";
  const secondary = "text-neutral-900 bg-neutral-200 hover:bg-white";
  const outline = "bg-inherit hover:bg-white/20";

  return (
    <button
      className={`border border-border px-4 py-2 rounded-full cursor-pointer duration-300 ${className ?? ''} ${variant === 'secondary' ? secondary : variant === 'outline' ? outline : primary}`}
      disabled={disabled}
      {...otherProps}
    >
      {children? children : label}
    </button>
  );
};

export default Button;
