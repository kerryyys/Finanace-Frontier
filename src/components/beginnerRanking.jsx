import "../component-css/beginnerRanking.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function BeginnerRanking() {
  return (
    <div className="ranking-container">
      <h3>CURRENT RANKING</h3>
      <Container className="ranking-list">
        <Row className="ranking-item ranking-first">
          <Col sm={3}>
            <p className="ranking-prize">RM100.00</p>
          </Col>
          <Col>
            <Container className="ranking-card">
              <Row>
                <Col sm={3}>
                  <img src="../../Resources/goldmedal.png" alt="" />
                </Col>
                <Col>
                  <h5>PAK CHANG KOO</h5>
                  <div className="ranking-score">
                    <p>2,050,000</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="ranking-item ranking-second">
          <Col sm={3}>
            <p className="ranking-prize">RM50.00</p>
          </Col>
          <Col>
            <Container className="ranking-card">
              <Row>
                <Col sm={3}>
                  <img src="../../Resources/silvermedal.png" alt="" />
                </Col>
                <Col>
                  <h5>PAK CHANG KOO</h5>
                  <div className="ranking-score">
                    <p>2,050,000</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="ranking-item ranking-third">
          <Col sm={3}>
            <p className="ranking-prize">RM25.00</p>
          </Col>
          <Col>
            <Container className="ranking-card">
              <Row>
                <Col sm={3}>
                  <img src="../../Resources/bronzemedal.png" alt="" />
                </Col>
                <Col>
                  <h5>PAK CHANG KOO</h5>
                  <div className="ranking-score">
                    <p>2,050,000</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="ranking-item ranking-fourth">
          <Col sm={3}>
            <p className="ranking-prize">RM12.50</p>
          </Col>
          <Col>
            <Container className="ranking-card">
              <Row>
                <Col sm={3}>
                  <div className="ranking-placing">
                    <p>4</p>
                  </div>
                </Col>
                <Col>
                  <h5>PAK CHANG KOO</h5>
                  <div className="ranking-score">
                    <p>2,050,000</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="ranking-item ranking-own">
          <Col sm={3}>
            <p className="ranking-prize">RM0.00</p>
          </Col>
          <Col>
            <Container className="ranking-card">
              <Row>
                <Col sm={3}>
                  <div className="ranking-placing">
                    <p>11</p>
                  </div>
                </Col>
                <Col>
                  <h5>YOU</h5>
                  <div className="ranking-score">
                    <p>2,050,000</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Button variant="view-more">
        VIEW MORE <i className="bi bi-chevron-right"></i>
      </Button>
    </div>
  );
}
