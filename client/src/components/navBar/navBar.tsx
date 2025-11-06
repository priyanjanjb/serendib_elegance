import { useState } from "react";
import logo from "../../assets/image/logo.png";
import fb from "../../assets/image/logoes/facebook.svg";
import instagram from '../../assets/image/logoes/instagram.svg'
import trpadvisor from '../../assets/image/logoes/tripadvisor.svg'
import { Moon, Sun, Menu, ChevronDown } from "lucide-react";
import "../../assets/styleSheet/style.css"; 

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navBar">
      {/* Left - Logo */}
      <div className="navLeft">
        <img src={logo} alt="Serendib Elegance" className="mainLogo" />
      </div>

      {/* Center - Contact info */}
      <div className="navCenter">
        <p className="contactText">serendibeligance@gmail.com | +94 74 220 1665</p>
      </div>

      {/* Right - Icons and controls */}
      <div className="navRight">
        <div className="socialIcons">

          <img src={fb} alt="Facebook" className="fbIcon" />
          <img src={instagram} alt="Instagram" className="instagramIcon" />
          <img src={trpadvisor} alt="Tripadvisor" className="tripAdvisorIcon" />
        </div>

        <button onClick={toggleDarkMode} className="darkToggle" aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        <button onClick={toggleMenu} className="menuToggle" aria-label="Toggle Menu">
          <Menu size={22} />
          <ChevronDown
            size={18}
            className={`dropdownIcon ${menuOpen ? "rotate" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
