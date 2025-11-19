import "../../../assets/styleSheet/style.css"; // External Tailwind CSS file
import { facebook , instagram , tripadvisor } from "../../../assets/image/svg/svgIcons";
function FooterBar() {
  return (
    <div className="footerbar-container">
      {/* Left Section */}
      <div className="footerbar-section">
        <h4 className="footerbar-title">See also</h4>
        <ul className="footerbar-list">
          <li>Highlights</li>
          <li>Attraction</li>
          <li>Roots</li>
          <li>asdasda</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </ul>
      </div>

      {/* Middle Section */}
      <div className="footerbar-center">
        <h4 className="footerbar-title">Serendib Elegance</h4>
        <p>+94 77 227 5553</p>
        <p>No: 138/10,</p>
        <p>1st lane,</p>
        <p>Rabarwatta Road,</p>
        <p>Gangodawila Nugegoda</p>
      </div>

      {/* Right Section */}
      <div className="footerbar-right">
        <h4 className="footerbar-title">Follow Us</h4>
        <div className="footerbar-icons">
          {facebook({className:"fbIcon"})}
          {instagram({className:"insIcon"})}
          {tripadvisor({className:"tripAdvisorIcon"})}
        </div>
      </div>
    </div>
  );
}

export default FooterBar;
