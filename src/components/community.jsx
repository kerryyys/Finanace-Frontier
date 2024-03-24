import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from './navBar';
import CommunityTrending from './communityTrending';
import CommunityArchived from './communityArchived';
import CommunitySuggestion from './communitySuggestion';
import "../component-css/community.css";

function Community(){
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const handleMenuItemClick = (index) => {
        setActiveMenuItem(index);
    };

    return(
        <div id="community">
            <NavBar></NavBar>
            <h1>Community</h1>
            <Nav class="horizontal-nav" role="navigation">
                <ul>
                    <li><a><Nav.Link href="#all" style={{textDecoration: activeMenuItem === 0 ? 'underline' : 'none', color: activeMenuItem === 0 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(0)}>All</Nav.Link></a></li>
                    <li><a><Nav.Link href="#general" style={{textDecoration: activeMenuItem === 1 ? 'underline' : 'none', color: activeMenuItem === 1 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(1)}>General</Nav.Link></a></li>
                    <li><a><Nav.Link href="#tradequest" style={{textDecoration: activeMenuItem === 2 ? 'underline' : 'none', color: activeMenuItem === 2 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(2)}>TradeQuest</Nav.Link></a></li>
                    <li><a><Nav.Link href="#weeklychallenge" style={{textDecoration: activeMenuItem === 3 ? 'underline' : 'none', color: activeMenuItem === 3 ? '#FFA800' : 'white'}} onClick={() => handleMenuItemClick(3)}>Weekly Challenge</Nav.Link></a></li>
                </ul>
            </Nav>
                <div id="communitySearch">
                    <img src="Resources/searchGroup.png" alt="Search Group" className="search-group-img" />
                    <Button>New Topic</Button>
                </div>
            <div id="communityComponent">
                <div id="communityComponentTop">
                    <CommunityTrending></CommunityTrending>
                    <p1><CommunityArchived></CommunityArchived></p1>
                </div>
                <div id="communityComponenBtm">
                    <CommunitySuggestion></CommunitySuggestion>
                </div>
            </div>
        </div>
    )
}

export default Community;