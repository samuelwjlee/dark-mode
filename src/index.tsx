import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

const ThemeContext = createContext(false)
const ThemeToggleContext = createContext(() => {})

function ThemeProvider({ children }: { children: React.ReactChild }) {
  const [darkTheme, setTheme] = useState(false)

  function toggleTheme() {
    setTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
export function useThemeToggle() {
  return useContext(ThemeToggleContext)
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
