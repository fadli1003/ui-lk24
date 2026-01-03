import { type ReactNode } from "react";

type Variant = 'primary' | 'secondary' | 'outline'; 

type PageProps = {
  otherProps: unknown;
}

const Button = ({
  variant,
  disabled,
  className,
  label,
  children,
  otherProps,
}: {
  variant?: Variant;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  label?:string;
  otherProps?: PageProps;
}) => {
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
