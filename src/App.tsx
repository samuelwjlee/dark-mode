import { useTheme } from './context'
import './App.css'

function App() {
  const [theme, toggleTheme] = useTheme()
  return (
    <div className="App" style={theme ? { backgroundColor: 'black' } : {}}>
      <button className="DarkModeButton" onClick={toggleTheme}>
        <span />
        <span style={theme ? { backgroundColor: 'black', left: 48 } : {}} />
      </button>
    </div>
  )
}

export default App
