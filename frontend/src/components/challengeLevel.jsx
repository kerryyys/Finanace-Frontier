import {
  Card,
  Container,
  Col,
  Row,
  ProgressBar,
  Button,
  Image,
} from "react-bootstrap";
import "../component-css/challengeLevel.css";
import { Link } from "react-router-dom";

function ChallengeLevel({
  level,
  progress,
  period,
  condition,
  timerValue,
  prize,
  entries,
}) {
  const getBackgroundColor = () => {
    switch (condition) {
      case "open":
        return "linear-gradient(90deg,rgba(255, 255, 255, 0.296) 0%,rgba(255, 211, 127, 0.7) 100%)";
      case "locked":
        return "linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, #C4C4C4 100%)";
      case "high-level":
        return "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, #FFBD3D 100%)";
    }
  };

  const renderButton = () => {
    switch (condition) {
      case "open":
        return (
          <Link to="/challenge/beginner">
            <Button size="lg" variant="success">
              VIEW
            </Button>
          </Link>
        );
      case "locked":
        return (
          <Button size="lg" variant="secondary" disabled>
            {setTimerValue()}
          </Button>
        );
      case "high-level":
        return (
          <>
            <p>
              <i className="bi bi-exclamation-triangle-fill"></i>
              For higher level
            </p>
            <Button size="lg" variant="secondary" disabled>
              <i className="bi bi-lock-fill"></i>
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  const setTimerValue = () => {
    const hours = Math.floor(timerValue / 3600);
    const minutes = Math.floor((timerValue - hours * 3600) / 60);
    const seconds = timerValue - hours * 3600 - minutes * 60;
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <Card
      className="level-container"
      style={{ background: getBackgroundColor() }}
    >
      <Card.Body className="card-body">
        <Container className="level-top">
          <Row>
            <Col sm={9} className="level-info">
              <h5>{level} level</h5>
              <ProgressBar
                now={progress}
                variant={progress < 100 ? "success" : "warning"}
              />
              <p>{period}</p>
            </Col>
            <Col className="button-side">{renderButton()}</Col>
          </Row>
          <Image className="coin-bg" src="../../Resources/coins.png"></Image>
        </Container>
      </Card.Body>
      <Card.Footer className="prize-pool">
        <p>Current Prize pool:&emsp;</p>
        <p className="prize">RM{prize}&emsp;</p>
        <p> {entries} entries</p>
      </Card.Footer>
    </Card>
  );
}
ChallengeLevel.defaultProps = {
  level: "Null",
  progress: 0,
  period: "0H left",
  condition: "locked",
  timerValue: 0,
  prize: 0.0,
  entries: 0,
};
export default ChallengeLevel;
