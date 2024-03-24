import "../component-css/navBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <Navbar expand="lg" id="navbar" className="navBar-container">
      <Container className='navMiddle'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <div className='navButton-container'>
              <NavItem
                to="/"
                label="HOME"
                active={activeMenuItem === 0}
                onClick={() => handleMenuItemClick(0)}
              />
              <NavItem
                to="/education"
                label="EDUCATION"
                active={activeMenuItem === 1}
                onClick={() => handleMenuItemClick(1)}
              />
              <NavItem
                to="/challenge"
                label="CHALLENGE"
                active={activeMenuItem === 2}
                onClick={() => handleMenuItemClick(2)}
              />
              <NavItem
                to="/community"
                label="COMMUNITY"
                active={activeMenuItem === 3}
                onClick={() => handleMenuItemClick(3)}
              />
              <NavItem
                to="/news"
                label="NEWS / ARTICLES"
                active={activeMenuItem === 4}
                onClick={() => handleMenuItemClick(4)}
              />
              <NavItem
                to="/about"
                label="ABOUT US"
                active={activeMenuItem === 5}
                onClick={() => handleMenuItemClick(5)}
              />
            </div>
          </Nav>
        </Navbar.Collapse>

        <div className='wallet-container'>
          <div className="coin-box">
            <img className="coin-logo" src="../Resources/coin-logo.png" alt="coin logo" />
            <p>100</p>
          </div>
          <div className="money-box">
            <img className="money-logo" src="../Resources/money-logo.png" alt="money logo" />
            <p>$1000</p>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

// NavItem component to handle navigation links
const NavItem = ({ to, label, active, onClick }) => (
  <li>
    <Link
      to={to}
      className={active ? "nav-link active" : "nav-link"}
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

export default NavBar;
