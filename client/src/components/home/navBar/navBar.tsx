import { useState } from "react";
import logo from "../../../assets/image/logo.png";
import { Moon, Sun, Menu, ChevronDown } from "lucide-react";
import "../../../assets/styleSheet/style.css"; 
import { facebook , instagram , tripadvisor } from "../../../assets/image/svg/svgIcons";

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
          {facebook()}
          {instagram()}
          {tripadvisor()}
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
