import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../page-css/BeginnerLevelPage.css";
import BeginnerLevelProgress from "../components/beginnerLevelCard";
import StockList from "../components/stockList";
import BeginnerRanking from "../components/beginnerRanking";
import AllocationBreakdown from "../components/allocationBreakdown";
import PortfolioSummary from "../components/portfolioSummary";

export default function BeginnerLevelPage() {
  return (
    <>
      <div className="page-title">
        <h1>Beginner Level - Weekly Challenge</h1>
      </div>
      <Container className="begineer-level-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/challenge" }}>
            Weekly Challenge
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Beginner Level</Breadcrumb.Item>
        </Breadcrumb>
        <div className="challenge-card">
          <BeginnerLevelProgress></BeginnerLevelProgress>
        </div>
        
        <Row className="stock-ranking-container">
          <Col className="stock-col">
            <StockList></StockList>
          </Col>
          <Col className="ranking-col">
            <BeginnerRanking></BeginnerRanking>
          </Col>
        </Row>
        <Row className="allocation-portfolio-container">
          <Col className="allocation-col" sm={5}>
            <AllocationBreakdown isChallenge={true}></AllocationBreakdown>
          </Col>
          <Col className="portfolio-col" sm={7}>
            <PortfolioSummary></PortfolioSummary>
          </Col>
        </Row>
        <div className="reassurance">
          <p>
            "Rest assured, your virtual game financial records remain separate
            from your real-life ones."
          </p>
        </div>
      </Container>
    </>
  );
}
