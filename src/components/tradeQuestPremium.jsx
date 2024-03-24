import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../component-css/tradeQuestPremium.css';

function TradeQuestPremium() {
    return (
        <Card id="tradeQuestPremium">
            <Card.Img src="Resources/tradeQuestPremium.png"/>
            <Card.ImgOverlay>
                <Card.Title>TradeQuest: Endless</Card.Title>
                <Card.Text>Shape your virtual investment journey.<br/>Explore, strategize, and see progress with every action.</Card.Text>
                <Link to="/education/tradequestendless"><Button disabled><img src = "Resources\lock-fill.png" className='lock-img'></img></Button></Link>
                <div className="premiumContainer">
                  <p>Premium Only</p>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default TradeQuestPremium;