import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState} from 'react';
import '../component-css/navBar.css';

function NavBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
      setActiveMenuItem(index);
  };

  return (
    <Navbar expand="lg" id="navbar" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> Somewat button on the above website*/}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul>
              <img src="Resources\logo white.png" className="logo-img"></img>
              <li><a><Nav.Link href="#home" style={{fontWeight: activeMenuItem === 0 ? 'bold' : 'normal'}} onClick={() => handleMenuItemClick(0)}>HOME</Nav.Link></a></li>
              <li><a><Nav.Link href="#education" style={{fontWeight: activeMenuItem === 1 ? 'bold' : 'normal'}} onClick={() => handleMenuItemClick(1)}>EDUCATION</Nav.Link></a></li>
              <li><a><Nav.Link href="#challenge" style={{fontWeight: activeMenuItem === 2 ? 'bold' : 'normal'}} onClick={() => handleMenuItemClick(2)}>CHALLENGE</Nav.Link></a></li>
              <li><a><Nav.Link href="#community" style={{fontWeight: activeMenuItem === 3 ? 'bold' : 'normal'}} onClick={() => handleMenuItemClick(3)}>COMMUNITY</Nav.Link></a></li>
              <li><a><Nav.Link href="#newsarticles" style={{fontWeight: activeMenuItem === 4 ? 'bold' : 'normal'}} onClick={() => handleMenuItemClick(4)}>NEWS / ARTICLES</Nav.Link></a></li>
              <li><a><Nav.Link href="#about" style={{fontWeight: activeMenuItem === 5 ? 'bold' : 'normal'}} onClick={() => handleMenuItemClick(5)}>ABOUT US</Nav.Link></a></li>
              <li id="coin-container" style={{ marginLeft: '10px' }}>
                <div className="coin-box">
                  <img className="coin-logo" src="Resources\coin-logo.png" alt="coin logo" />
                  100
                </div>
              </li>
              <li id="money-container" style={{ marginLeft: '10px' }}>
                <div className="money-box">
                  <img className="money-logo" src="Resources\money-logo.png" alt="money logo" />
                  $1000
                  <button id="add-money-btn">+</button>
                </div>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;