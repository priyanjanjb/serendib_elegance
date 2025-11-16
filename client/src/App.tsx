
import HeroBar from "./components/heroBar/heroBar"
import OverView from "./components/overView/overView"
import HeighLight from "./components/heighLight/heighLight"
//import AttractionBar from "./components/attraction/attractionBar"
import LogoSection from "./components/logoSection/logoSection"
import PlanningTools from "./components/planningTool/plannigTools"
import Destination from "./components/destination/destination"
import FooterBar from "./components/footer/footerBar"
import PhotoSection from "./components/photoSection/photoSection"
import '../src/assets/styleSheet/style.css'
import FindUs from "./components/findUs/FindUs"
import ShareThought from '../src/components/shareThought/shareThought'
function App() {

  return (
    <div className="backPanel">
      <HeroBar/>
      <OverView/>
      <HeighLight />
      <Destination />
      <PlanningTools />
      <PhotoSection />
      <LogoSection />
      <FindUs />
      <ShareThought />
      <FooterBar />
    </div>
  )
}

export default App
