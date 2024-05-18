import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

// BEM -> Block Element Modifier (CSS naming convention)
// Syntax: [block]__[element]--[modifier]

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
