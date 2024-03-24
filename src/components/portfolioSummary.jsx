import "../component-css/portfolioSummary.css";
import { Image, Container, Row, Col } from "react-bootstrap";
function PortfolioSummary({ isChallenge }) {
  const infoList = [
    {
      id: 1,
      label: "Total Profit",
      value: "+$7909.22",
      desc: "+15.15%",
    },
    {
      id: 2,
      label: "Avg. monthly growing",
      value: "~2.15%",
      desc: "~$12.12",
    },
    {
      id: 3,
      label: "Best profit token",
      value: "Bitcoin",
      desc: "BTC",
    },
    {
      id: 4,
      label: "Portfolio score",
      value: "71/100",
      desc: "Great",
      coloredText: true,
    },
    {
      id: 5,
      label: "AIRA",
      hasIcon: true,
      value: "60%",
      desc: "Rebalance accuracy",
    },
    {
      id: 6,
      label: "PRI",
      hasIcon: true,
      value: "0.50",
      desc: "Resilience Index: Risky",
    },
  ];
  return (
    <>
      <div className="portfolio-container">
        <p>Summary</p>
        <div className="current-value-container">
          <h3 className="current-value">$54,321.00</h3>
          {isChallenge && <p>Stimulated fund</p>}
        </div>
        <Image
          src="../../Resources/portfoliograph.png"
          className="portfolio-graph"
        ></Image>
        <Container className="portfolio-info-container">
          <Row>
            {infoList.map((item) => {
              return (
                <Col key={item.id} sm={4}>
                  <p>
                    {item.label}&nbsp;
                    {item.hasIcon && <i className="bi bi-info-circle-fill"></i>}
                  </p>
                  <h3
                    style={{ color: item.coloredText ? "#23BC3C" : "inherit" }}
                  >
                    {item.value}
                  </h3>
                  <p>{item.desc}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
PortfolioSummary.defaultProps = {
  isChallenge: false,
};
export default PortfolioSummary;
