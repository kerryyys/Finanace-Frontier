import "../component-css/communityTrending.css";
import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CommunityTrending(){
    const [likes1, setLikes1] = useState(10);
    const [liked1, setLiked1] = useState(false);

    const [likes2, setLikes2] = useState(10);
    const [liked2, setLiked2] = useState(false);

    const [likes3, setLikes3] = useState(10);
    const [liked3, setLiked3] = useState(false);

    const incrementLikes1 = () => {
        setLikes1(likes1 + 1);
        setLiked1(true);
        setTimeout(() => setLiked1(false), 1000);
    };

    const incrementLikes2 = () => {
        setLikes2(likes2 + 1);
        setLiked2(true);
        setTimeout(() => setLiked2(false), 1000);
    };

    const incrementLikes3 = () => {
        setLikes3(likes3 + 1);
        setLiked3(true);
        setTimeout(() => setLiked3(false), 1000);
    };


    return(
        <Card id="communityTrending">
            <h2>Trending</h2>
            <div id="trendingContainer">
                <div>
                <Card.Img src="Resources/Profile1.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>Introduction to Capital Market</Card.Title>
                        </Button>
                        <Card.Text>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</Card.Text>
                        <p1>
                            <Button>10 replies</Button>
                             • 
                            <Button onClick={incrementLikes1} style={{ backgroundColor: liked1 ? 'green' : 'transparent' }}>
                                {likes1}∧
                            </Button>
                        </p1>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div id="trendingContainer">
                <div>
                <Card.Img src="Resources/Profile2.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>Differentiation in Digital Marketing</Card.Title>
                        </Button>
                        <Card.Text>Differentiation and integration is useful in marketing !!....</Card.Text>
                        <p1>
                            <Button>10 replies</Button>
                             • 
                            <Button onClick={incrementLikes2} style={{ backgroundColor: liked2 ? 'green' : 'transparent' }}>
                                {likes2}∧
                            </Button>
                        </p1>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div id="trendingContainer">
                <div>
                <Card.Img src="Resources/Profile3.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>Financial Tips for Everyone</Card.Title>
                        </Button>
                        <Card.Text>Financial tips number 1, do not.....</Card.Text>
                        <p1>
                            <Button>10 replies</Button>
                             • 
                            <Button onClick={incrementLikes3} style={{ backgroundColor: liked3 ? 'green' : 'transparent' }}>
                                {likes3}∧
                            </Button>
                        </p1>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div className="viewMore">
                <Card.Link href="#">View More {'>'}</Card.Link>
            </div>
        </Card>
    )
}

export default CommunityTrending;