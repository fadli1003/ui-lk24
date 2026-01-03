import { useEffect, useState, type ReactNode } from "react";

type Variant = 'primary' | 'secondary'

const Button = ({
  variants,
  disabled,
  className,
  label,
  children,
}: {
  variants?: Variant;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  label?:string;
  otherProps?: unknown;
}) => {
  const primary = "text-neutral-200 bg-neutral-950 hover:bg-black";
  const secondary = "text-neutral-900 bg-neutral-200 hover:bg-white";

  const [variant, setVariant] = useState(primary);
  
  useEffect(() => {
    if(variants === "secondary"){
      setVariant(secondary)
    }else{
      setVariant(primary)
    }
  }, [variants])

  return (
    <button
      className={`border border-border px-4 py-2 rounded-full cursor-pointer duration-300 ${className ?? ''} ${variant}`}
      disabled={disabled}
    >
      {children? children : label}
    </button>
  );
};

export default Button;
