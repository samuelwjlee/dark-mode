import { useTheme, useThemeToggle } from '.'
import './App.css'

function DarkModeButton() {
  const toggleTheme = useThemeToggle()
  const darkTheme = useTheme()

  return (
    <button className="DarkModeButton" onClick={toggleTheme}>
      <span style={darkTheme ? { backgroundColor: 'lightgray' } : {}} />
      <span style={darkTheme ? { backgroundColor: 'black', left: 48 } : {}} />
    </button>
  )
}

function App() {
  const darkTheme = useTheme()
  return (
    <div className="App" style={darkTheme ? { backgroundColor: 'black' } : {}}>
      <DarkModeButton />
    </div>
  )
}

export default App
