import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Sean Campbell &nbsp;
            <i className="fa-solid fa-terminal" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-angles-down" : "fas fa-bars-staggered"}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                Work Examples
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Button</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
