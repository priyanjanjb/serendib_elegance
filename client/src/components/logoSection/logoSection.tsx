import "../../assets/styleSheet/style.css";
import logo from "../../assets/image/logo.png"; // ✅ replace with your actual logo file name

function LogoSection() {
  return (
    <div className="logo-bar">
      <img
        src={logo}
        alt="Serendib Elegance Logo"
        className="logo-image"
      />
    </div>
  );
}

export default LogoSection;
