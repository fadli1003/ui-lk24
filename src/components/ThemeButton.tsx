import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeButton = ({ className }: { className?: string }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			onClick={toggleTheme}
			aria-label='Toggle Dark'
			className='cursor-pointer'
			title='Theme toggle'
		>
			{theme === 'dark' ? <Moon className={className} /> : <Sun className={className} />}
		</button>
	);
};

export default ThemeButton;
