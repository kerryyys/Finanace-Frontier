import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import '../component-css/tradeQuestBasic.css';

function TradeQuestBasic() {
    const now = 60;
    return (
        <Card id="tradeQuestBasic">
            <Card.Img src="Resources/tradeQuestBasic.png"/>
            <Card.ImgOverlay>
                <Card.Title>TradeQuest: Basic Knowledge</Card.Title>
                <Card.Text>Begin Your Financial Education Adventure Now!</Card.Text>
                <ProgressBar animated now={now} label={`${now}%`} visuallyHidden/>
                <Button>Continue</Button>
            </Card.ImgOverlay>
        </Card>
    );
}

export default TradeQuestBasic;