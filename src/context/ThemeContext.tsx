import React, { useEffect, useState } from 'react'
import { ThemeContext, type Theme } from '../hooks/use-theme';

export function ThemeProvider({children}: {children: React.ReactNode}) {
  
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;

    if(savedTheme){
      setTheme(savedTheme);
      window.document.documentElement.classList.add(savedTheme);
    } else if(window.matchMedia('(prefer-color-scheme: dark)').matches){
      setTheme('dark');
      window.document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
    window.document.documentElement.classList.remove('light', 'dark');
    window.document.documentElement.classList.add(newTheme)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
