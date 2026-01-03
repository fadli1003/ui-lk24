import React, { useEffect, useState } from 'react';
import { ThemeContext, type Theme } from '../hooks/use-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	// const [theme, setTheme] = useState<Theme>('light');

	// useEffect(() => {
	//   const savedTheme = localStorage.getItem('theme') as Theme | null;

	//   if(savedTheme){
	//     setTheme(savedTheme);
	//     window.document.documentElement.classList.add(savedTheme);
	//   }
	// }, [])

	// const toggleTheme = () => {
	//   const newTheme = theme === 'dark' ? 'light' : 'dark';
	//   setTheme(newTheme);

	//   localStorage.setItem('theme', newTheme);
	//   window.document.documentElement.classList.remove('dark', 'light');
	//   window.document.documentElement.classList.add(newTheme)
	// }

	// 1. Initializer: Ambil data awal langsung saat state dibuat
	const initialTheme = () => {
		if (typeof window !== 'undefined') {
			return (localStorage.getItem('theme') as Theme) || 'light';
		}
		return 'light';
	};

	const [theme, setTheme] = useState<Theme>(initialTheme);

	// 2. Sync: Setiap kali 'theme' berubah, update DOM dan LocalStorage
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	// 3. Action: Fungsi untuk pindah antar tema
	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
