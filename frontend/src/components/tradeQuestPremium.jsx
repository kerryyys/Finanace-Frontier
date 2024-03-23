import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../component-css/tradeQuestPremium.css';

function TradeQuestPremium() {
    const now = 60;
    return (
        <Card id="tradeQuestPremium">
            <Card.Img src="Resources/tradeQuestPremium.png"/>
            <Card.ImgOverlay>
                <Card.Title>TradeQuest: Endless</Card.Title>
                <Card.Text>Shape your virtual investment journey.<br/>Explore, strategize, and see progress with every action.</Card.Text>
                <Button disabled><img src = "Resources\lock-fill.png"></img></Button>
                <div className="premiumContainer">
                  <p>Premium Only</p>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default TradeQuestPremium;