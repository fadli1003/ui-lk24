import React, { useEffect, useState } from 'react'
import { ThemeContext } from '@/hooks/useTheme'

export default function ThemeProvider(
	{ children }: { children: React.ReactNode }
) {
	// const [theme, setTheme] = useState<Theme>('light');

	const initialTheme = () => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			return savedTheme
		}
		return 'light'
	}

	const [theme, setTheme] = useState(initialTheme())

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove('light', 'dark')
		root.classList.add(theme)
		root.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)

	}, [theme])

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
