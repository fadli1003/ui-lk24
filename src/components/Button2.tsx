import { cva } from 'class-variance-authority';
import { type ButtonHTMLAttributes } from 'react';

type Classes = 'primary' | 'secondary' | 'outline';

const classes = cva('rounded-full py-1.5 px-6', {
	variants: {
		variant: {
			primary: "dark:text-neutral-800 dark:bg-neutral-200 bg-neutral-800 text-neutral-200",
			secondary: 'bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
			outline: 'bg-transparent text-foreground border border-border'
		}
	}
});

const Button2 = (
	props: {
		variant: Classes;
	} & ButtonHTMLAttributes<HTMLButtonElement>
) => {
	const { variant, className, ...otherProps } = props;

	return (
		<button
			className={classes({variant, className,})}
			{...otherProps}
		/>
	);
};

export default Button2;
