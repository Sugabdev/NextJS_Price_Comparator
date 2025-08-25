'use client'

import { createContext, useState, useEffect } from 'react'
import type { ThemeType, ThemeContextType } from '@/types/ThemeTypes'

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>('light') // valor seguro por defecto

    // Detectar tema del sistema solo en el cliente
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeType | null

        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(prefersDark ? 'dark' : 'light')
        }
    }, [])

    // Escuchar cambios en el tema del sistema
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light')
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    // Aplicar clase al <html> y guardar en localStorage
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
