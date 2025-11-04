import { useState } from 'react';
import '../../assets/styleSheet/style.css';
import fbLogo from '../../assets/image/logoes/icons8-facebook-50.svg';
import instLogo from '../../assets/image/logoes/ig-instagram-icon.svg';
import taLogo from '../../assets/image/logoes/tripadvisor-icon.svg';


interface Props {}

function NavBar(props: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="navBar flex items-center justify-between px-6 py-3 relative">
      {/* Left: Logo */}
      <div className="flex items-center">
        <p className="logo">logo</p>
      </div>

      {/* Center: Email & Phone */}
      <div className="flex flex-col items-center">
        <p className="emailSection">serendibeligance@gmail.com</p>
        <p className="phone">+94 77 227 5553</p>
      </div>

      {/* Right: Social Icons + Mode Toggle + Mobile Menu */}
      <div className="flex items-center space-x-3">
        <img className="logoSize" src={fbLogo} alt="facebookLogo" />
        <img className="logoSize" src={instLogo} alt="instLogo" />
        <img className="logoSize" src={taLogo} alt="taLogo" />

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          DRK
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 md:hidden"
        >
          Dropdown
        </button>
      </div>

      {/* Optional Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 shadow-md rounded-md p-2 flex flex-col space-y-2 md:hidden navBar">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
      )}
    </div>
  );
}

export default NavBar;
