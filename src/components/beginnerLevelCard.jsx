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
import "../component-css/challengeLevel.css";
import "../component-css/beginnerLevelProgress.css";

export default function BeginnerLevelProgress() {
  return (
    <section>
      <div className="reminder-text">
        <p>
          <strong>
            This is a short-term investment challenge every week with simulated
            funds
          </strong>
          <br />
          Trade real-time stocks, track performance, and compete for prizes in a
          dynamic virtual trading environment. The list of fixed stocks is
          provided.
        </p>
      </div>
      <Card className="level-container">
        <Card.Body className="card-body">
          <Container className="level-top">
            <Row>
              <Col sm={9} className="level-info">
                <h5>Beginner level</h5>
                <ProgressBar now={40} variant="success" />
                <p>3D 20H left</p>
              </Col>
              <Col className="button-side">
                <Link to="/challenge/beginner">
                  <Button size="lg" variant="success">
                    TRADE
                  </Button>
                </Link>
              </Col>
            </Row>
            <Image className="coin-bg" src="../../Resources/coins.png"></Image>
          </Container>
        </Card.Body>
        <Card.Footer className="prize-pool">
          <p>Current Prize pool:&emsp;</p>
          <p className="prize">RM300.00&emsp;</p>
          <p> 30 entries</p>
        </Card.Footer>
      </Card>
    </section>
  );
}
