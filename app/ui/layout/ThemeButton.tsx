'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export function ThemeButton() {

    const themeContext = useContext(ThemeContext)
    if (!themeContext) return

    const { theme, setTheme } = themeContext
    const handleTheme = () => setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')

    return (

        <button
            onClick={handleTheme}
            className="relative w-16 h-9 rounded-full p-1 transition-colors inset-shadow-sm inset-shadow-slate-500 duration-300 dark:bg-slate-500 peer-checked:bg-slate-500"
        >
            <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === 'dark'} // opcional si manejas el estado
                readOnly // para que no se pueda cambiar por defecto
            />
            <div
                className="absolute left-1 top-1 size-7 rounded-full bg-slate-700 dark:bg-slate-200 transition-transform duration-300 peer-checked:translate-x-7"
            />
        </button>
    )
}