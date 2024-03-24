import "../component-css/homeProgress.css";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Image,
  Button,
  ButtonGroup,
} from "react-bootstrap";

function HomeProgress({ onGoalButtonClick }) {
  const awardList = [
    {
      id: 1,
      src: "../../Resources/award1.png",
    },
    {
      id: 2,
      src: "../../Resources/award2.png",
    },
    {
      id: 3,
      src: "../../Resources/award3.png",
    },
    {
      id: 4,
      src: "../../Resources/award2.png",
    },
    {
      id: 5,
      src: "../../Resources/awardchevron.png",
    },
  ];
  return (
    <>
      <Container className="progress-container">
        <Row>
          <Col sm={4} className="progress-left">
            <Image
              src="../../Resources/progressprofile.png"
              id="profile-pic"
            ></Image>
            <h3>Jonathan Leon</h3>
            <div className="profile-desc">
              <p>Beginner level</p>
              <p>
                Current Plan:{" "}
                <span style={{ color: "#FFA800", fontWeight: "bold" }}>
                  Premium
                </span>
              </p>
            </div>
            <div className="awards-container">
              {awardList.map((item) => {
                return (
                  <Button variant="award" key={item.id}>
                    <img src={item.src} className="award-img" />
                  </Button>
                );
              })}
            </div>
          </Col>
          <Col sm={8} className="progress-right">
            <Container className="current-status">
              <Row>
                <Col sm={3}>
                  <h3>Level 2</h3>
                  <p>Current task 3/5</p>
                </Col>
                <Col className="current-progress">
                  <ProgressBar now={60} variant="success"></ProgressBar>
                </Col>
              </Row>
            </Container>
            <div className="goal-progress-item progress-item">
              <div className="item-text">
                <p>Set a goal</p>
                <h5>Wealth Compass: Goal Planner</h5>
              </div>
              <Button size="sm" id="goal-btn" onClick={onGoalButtonClick}>
                Open
              </Button>
            </div>
            <div className="tradequest-progress-item progress-item">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="bi bi-lock-fill"></i>
                <div className="item-text">
                  <p>Complete Chapter 1.</p>
                  <h5>TradeQuest: Basic Knowledge</h5>
                </div>
              </div>
              <Button size="sm" id="pending-btn" disabled>
                Pending
              </Button>
            </div>
            <div className="challenge-progress-item progress-item">
              <i className="bi bi-unlock-fill"></i>
              <div className="item-text">
                <p>Level 3</p>
                <h5>
                  Weekly Challenge&nbsp;
                  <span style={{ fontWeight: "normal", color: "#524F53" }}>
                    Unlock
                  </span>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

HomeProgress.defaultProps = {
  onGoalButtonClick: () => {
    console.log("Goal button clicked");
  },
};
export default HomeProgress;
