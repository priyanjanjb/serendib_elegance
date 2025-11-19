import NavBar from "../home/navBar/navBar"
import FooterBar from "../home/footer/footerBar"
import { Button } from "../home/popItems/popItems"
import "../../assets/styleSheet/style.css";
import "../../assets/styleSheet/subpage.css";

function SubPage({ title, image,children}: { title: string; image: string; children?: React.ReactNode }) {
  return (
    <div className="backPanel">
      <Button className="popButton" />
      <NavBar />

      <div 
        className="heroSection"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="heroCaption">{title}</h1>
      </div>
      <div className="txtArea">
          {children}
      </div>

      <FooterBar />
    </div>
  );
}

export default SubPage;
