import './App.css'

function DarkModeToggle() {
  function toggleMode() {
    const app = document.getElementsByTagName('BODY')[0]
    if (localStorage.darkMode === 'on') {
      localStorage.darkMode = 'off'
      app.setAttribute('dark-mode', 'off')
    } else {
      localStorage.darkMode = 'on'
      app.setAttribute('dark-mode', 'on')
    }
  }
  return (
    <button className="DarkModeToggle" onClick={toggleMode}>
      <span></span>
      <span></span>
    </button>
  )
}

function SignUpButton() {
  return <button className="SignUpButton">Join or Log in</button>
}

function AvmBanner() {
  return (
    <div className="AvmBanner">
      <img
        alt="img"
        src={
          'https://images-15.housecanary.com/95e1/01/613f95fb05f9bc550f101e59_250x250.jpg'
        }
        className="PropertyImage"
      />
      <div className="PropertyDetails">
        <div className="PropertyAddress">1717 Rising Glen Rd., LA</div>
        <div className="PropertyInfo">3 Beds | 4 Baths | 4,516 Sq Ft</div>
        <div className="Price">$6,695,000</div>
      </div>
    </div>
  )
}

function HomeownerCard() {
  return (
    <div className="Card">
      <div className="Banner">
        <div className="BannerText">Lorem Ipsum dolor sit amet</div>
      </div>
      <div className="BodyText">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <button className="CTAButton">CLICK CTA</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="ComeHomeLogo">ComeHome</div>
        <div className="ActionContainer">
          <DarkModeToggle />
          <SignUpButton />
        </div>
      </header>
      <AvmBanner />
      <div className="CardContainer">
        <HomeownerCard />
      </div>
    </div>
  )
}

export default App
