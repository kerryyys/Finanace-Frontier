import { Container, Row, Col, Button } from "react-bootstrap";
import "../component-css/stockList.css";

export default function StockList() {
  const stockList = [
    {
      id: 1,
      stockName: "EaseInvest",
      stockCompany: "EaseInvest Technology",
      stockImage: "../../Resources/bug-fill.svg",
    },
    {
      id: 2,
      stockName: "EaseInvest",
      stockCompany: "EaseInvest Technology",
      stockImage: "../../Resources/bug-fill.svg",
    },
    {
      id: 3,
      stockName: "EaseInvest",
      stockCompany: "EaseInvest Technology",
      stockImage: "../../Resources/bug-fill.svg",
    },
    {
      id: 4,
      stockName: "EaseInvest",
      stockCompany: "EaseInvest Technology",
      stockImage: "../../Resources/bug-fill.svg",
    },
    {
      id: 5,
      stockName: "EaseInvest",
      stockCompany: "EaseInvest Technology",
      stockImage: "../../Resources/bug-fill.svg",
    },
  ];
  return (
    <div className="stock-container">
      <h3>LIST OF STOCKS</h3>
      <Container className="stock-list">
        {stockList.map((stockItem) => {
          return (
            <Row className="stock-item" key={stockItem.id}>
              <Col sm={3}>
                <img src={stockItem.stockImage} alt="stock img" />
              </Col>
              <Col sm={6} className="stock-info">
                <p>
                  <strong>{stockItem.stockName}</strong>
                </p>
                <p>{stockItem.stockCompany}</p>
              </Col>
              <Col sm={3}>
                <Button variant="success" size="sm" className="btn-stock">
                  Details
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Button variant="view-more">
        VIEW MORE <i className="bi bi-chevron-right"></i>
      </Button>
    </div>
  );
}
