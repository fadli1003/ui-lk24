import { useContext, createContext } from "react";

export type Theme = 'dark' | 'light';

interface ThemeContextType{
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if(!context) throw new Error("useTheme must use within ThemeProvider!");
  return context;
}