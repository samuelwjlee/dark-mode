import { createContext, ReactChild, useContext, useState } from 'react'

const ThemeContext = createContext<[boolean, () => void]>([false, () => {}])

export function ThemeProvider({ children }: { children: ReactChild }) {
  const [theme, setTheme] = useState(false)

  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme)
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
