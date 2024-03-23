import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';
import "../page-css/education.css"
import PageHeader from "../components/pageHeader";
import TradeQuestBasic from '../components/tradeQuestBasic';
import TradeQuestPremium from '../components/tradeQuestPremium';
import EnrollNewCourse from '../components/enrollNewCourse';
import DailyVocab from '../components/dailyVocab';
import { Container, Col, Row, Carousel } from "react-bootstrap";

function Education(){
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const handleMenuItemClick = (index) => {
        setActiveMenuItem(index);
    };
    
    return(
        <div id="education">
            <PageHeader></PageHeader>
            <Nav class="horizontal-nav" role="navigation">
                <ul>
                    <li><a><Nav.Link href="#all" style={{textDecoration: activeMenuItem === 0 ? 'underline' : 'none', color: activeMenuItem === 0 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(0)}>All</Nav.Link></a></li>
                    <li><a><Nav.Link href="#yourcourses" style={{textDecoration: activeMenuItem === 1 ? 'underline' : 'none', color: activeMenuItem === 1 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(1)}>Your Courses</Nav.Link></a></li>
                </ul>
            </Nav>
            <Container id="educationContainer">
                <div className="overflow-auto">
                <Row id="educationContainerTop">
                    <Col sm={6}>
                        <TradeQuestBasic></TradeQuestBasic>
                    </Col>
                    <Col sm={5}>
                        <TradeQuestPremium></TradeQuestPremium>
                    </Col>
                </Row>
                </div>
                <Row id="educationContainerBtm">
                    <Col sm={7}>
                        <EnrollNewCourse></EnrollNewCourse>
                    </Col>
                    <Col sm={5}>
                        <DailyVocab></DailyVocab>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Education;