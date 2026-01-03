import { useEffect, useState, type ButtonHTMLAttributes } from "react";

// interface Classes {
//   primary: unknown;
//   secondary: string;
//   outline: string;
// }

type Classes = "primary" | "secondary" | "outline";

const Button2 = (
  props: {
    variant?: Classes;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {

  const {variant , className, ...otherProps} = props;

  const primary = ('dark:text-neutral-800 dark:bg-neutral-200 bg-neutral-800 text-neutral-200')
  const secondary = ('bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200')
  const outline = ('bg-transparent text-foreground border border-border')

  const [classes, setClasses] = useState(primary)

  useEffect (() => {
    if(variant === "secondary"){
      setClasses(secondary)
    }else if(variant === "outline"){
      setClasses(outline)
    }else{
      setClasses(primary)
    }
  }, [variant])


  return (
    <button 
      className={`rounded-full py-1.5 px-6 ${classes} ${className}`}
      {...otherProps}
    />
  )
};

export default Button2;
