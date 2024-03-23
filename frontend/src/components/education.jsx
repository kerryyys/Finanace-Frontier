import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';
import "../component-css/education.css"
import NavBar from "./navBar"
import PageHeader from "./pageHeader";
import TradeQuestBasic from './tradeQuestBasic';
import TradeQuestPremium from './tradeQuestPremium';
import EnrollNewCourse from './enrollNewCourse';
// import DailyVocab from './dailyVocab';

function Education(){
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const handleMenuItemClick = (index) => {
        setActiveMenuItem(index);
    };
    
    return(
        <div id="education">
            <NavBar></NavBar>
            <PageHeader></PageHeader>
            <Nav class="horizontal-nav" role="navigation">
                <ul>
                    <li><a><Nav.Link href="#all" style={{textDecoration: activeMenuItem === 0 ? 'underline' : 'none', color: activeMenuItem === 0 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(0)}>All</Nav.Link></a></li>
                    <li><a><Nav.Link href="#yourcourses" style={{textDecoration: activeMenuItem === 1 ? 'underline' : 'none', color: activeMenuItem === 1 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(1)}>Your Courses</Nav.Link></a></li>
                </ul>
            </Nav>
            <div id='educationContainer'>
                <div id="educationContainerTop">
                    <TradeQuestBasic></TradeQuestBasic>
                    <p1><TradeQuestPremium></TradeQuestPremium></p1>
                </div>
                <div id="educationContainerBtm">
                    <p2><EnrollNewCourse></EnrollNewCourse></p2>
                    <img src="Resources/dailyvocabreplace.png" className='daily-vocab-replace'></img>
                </div>
            </div>
        </div>
    )
}

export default Education;