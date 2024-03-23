import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../component-css/enrollNewCourse.css"

function EnrollNewCourse() {
    return (
        <Card id="enrollNewCourse">
            <div className="header-wrapper">
                <h3>Enroll in New Course:</h3>
                <img src="Resources/searchGroup.png" alt="Search Group" className="search-group-img" />
            </div>
            <div id="courseContainer">
                <div>
                    <Card.Img src="Resources/Business.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>Introduction to Capital Market</Card.Title>
                        </Button>
                        <Card.Text>California Institute of Finance</Card.Text>
                        <p1>Professional Certificate</p1>
                        <p3>12123 Views</p3>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div id="courseContainer">
                <div>
                    <Card.Img src="Resources/Clothing.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>All about Risk Management</Card.Title>
                        </Button>
                        <Card.Text>Norway Institute of Finance</Card.Text>
                        <p2>Beginner</p2>
                        <p3>42543 Views</p3>
                    </Card.ImgOverlay>
                </div>
            </div>
            <div id="courseContainer">
                <div>
                    <Card.Img src="Resources/Clothing1.png" className="card-img"/>
                </div>
                <div>
                    <Card.ImgOverlay>
                        <Button>
                            <Card.Title>What are bonds and stocks?</Card.Title>
                        </Button>
                        <Card.Text>Norway Institute of Finance</Card.Text>
                        <div id="difficultyContainer">
                            <p2>Beginner</p2>
                            <p1>Professional Certificate</p1>
                        </div>
                        <p3>543 Views</p3>
                    </Card.ImgOverlay>
                </div>
            </div>
        </Card>
    );
}

export default EnrollNewCourse;
