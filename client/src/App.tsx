import NavBar from "./components/navBar/navBar"
import HeroBar from "./components/heroBar/heroBar"
import OverView from "./components/overView/overView"
import HeighLight from "./components/heighLight/heighLight"
import AttractionBar from "./components/attraction/attractionBar"
import LogoSection from "./components/logoSection/logoSection"
import EmailSection from "./components/emailSection/emailSection"
import FooterBar from "./components/footer/footerBar"

function App() {

  return (
    <div>
      <NavBar/>
      <HeroBar/>
      <OverView/>
      <HeighLight />
      <AttractionBar />
      <LogoSection />
      <EmailSection />
      <FooterBar/>
    </div>
  )
}

export default App
