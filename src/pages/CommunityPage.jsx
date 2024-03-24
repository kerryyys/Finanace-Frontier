import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CommunityTrending from "../components/communityTrending";
import CommunityArchived from "../components/communityArchived";
import CommunitySuggestion from "../components/communitySuggestion";
import { Container, Col, Row } from "react-bootstrap";
import "../page-css/community.css";

function Community() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <>
      <div className="page-title">
        <h1>Community</h1>
      </div>
      <Container id="community">
        <Nav className="horizontal-nav" role="navigation">
          <ul>
            <li>
              <Nav.Link
                href="#all"
                style={{
                  textDecoration: activeMenuItem === 0 ? "underline" : "none",
                  color: activeMenuItem === 0 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(0)}
              >
                All
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#general"
                style={{
                  textDecoration: activeMenuItem === 1 ? "underline" : "none",
                  color: activeMenuItem === 1 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(1)}
              >
                General
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#tradequest"
                style={{
                  textDecoration: activeMenuItem === 2 ? "underline" : "none",
                  color: activeMenuItem === 2 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(2)}
              >
                TradeQuest
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#weeklychallenge"
                style={{
                  textDecoration: activeMenuItem === 3 ? "underline" : "none",
                  color: activeMenuItem === 3 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(3)}
              >
                Weekly Challenge
              </Nav.Link>
            </li>
          </ul>
          <div id="communitySearch">
            <img
              src="Resources/searchGroup.png"
              alt="Search Group"
              className="search-group-img"
            />
            <Button>NEW TOPIC</Button>
          </div>
        </Nav>

        <Row id="communityComponent">
          <Col sm={6} id="communityComponentTop">
            <CommunityTrending></CommunityTrending>
          </Col>
          <Col sm={5}>
            <CommunityArchived></CommunityArchived>
          </Col>
        </Row>
        <div id="communityComponenBtm">
          <CommunitySuggestion></CommunitySuggestion>
        </div>
      </Container>
    </>
  );
}

export default Community;
