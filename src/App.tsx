import './App.css'

function ComeHomeLogo() {
  return (
    <img
      alt="img"
      src={'https://www.comehome.com/a7c8346f3571881a67294d24fb996e62.svg'}
      className="ComeHomeLogo"
    />
  )
}

function AvmBanner() {
  return (
    <div className="AvmBanner">
      <img
        alt="img"
        src={
          'https://images-15.housecanary.com/8d5f/c2/60da98bf71f77f2c512cf5d8.jpg'
        }
        className="PropertyImage"
      />
    </div>
  )
}

function SignUpButton() {
  return <button className="SignUpButton">Join or Log in</button>
}

function App() {
  return (
    <div className="App">
      <header className="Header">
        <ComeHomeLogo />
        <SignUpButton />
      </header>
      <AvmBanner />
    </div>
  )
}

export default App
