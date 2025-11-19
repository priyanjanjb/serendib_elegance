import HeroBar from "./components/home/heroBar/heroBar"
import OverView from "./components/home/overView/overView"
import HeighLight from "./components/home/heighLight/heighLight"
import LogoSection from "./components/home/logoSection/logoSection"
import PlanningTools from "./components/home/planningTool/plannigTools"
import Destination from "./components/home/destination/destination"
import FooterBar from "./components/home/footer/footerBar"
import PhotoSection from "./components/home/photoSection/photoSection"
import '../src/assets/styleSheet/style.css'
import FindUs from "./components/home/findUs/FindUs"
import ShareThought from './components/home/shareThought/shareThought'
import { Button } from "./components/home/popItems/popItems"

function App() {

  return (
    <div className="backPanel">
        <Button className="popButton" />
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
