import '../component-css/communityArchived.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CommunityArchived(){
    return(
        <Card id="communityArchived">
            <h2>Archived</h2>
            <div id="archivedContainer">
                <div>
                <Card.Img src="Resources/Profile1.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>Pro Tips of Capital Market</Card.Title>
                        </Button>
                        <Card.Text>Before diven into the topic, we have to know what is capital market. Capital market is....</Card.Text>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div id="archivedContainer">
                <div>
                <Card.Img src="Resources/Profile3.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>Sharpen Your Financial Skill</Card.Title>
                        </Button>
                        <Card.Text>What kind of skill considered as the essential financial skill. Let me introduce....</Card.Text>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div id="archivedContainer">
                <div>
                <Card.Img src="Resources/Profile1.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>Stock Market Overwatch</Card.Title>
                        </Button>
                        <Card.Text>Malaysia stock market is overwhelming with....</Card.Text>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div className="viewMore">
                <Card.Link href="#">View More {'>'}</Card.Link>
            </div>
        </Card>
    )
}

export default CommunityArchived;