import HomeProgress from "../components/homeProgress";
import AllocationBreakdown from "../components/allocationBreakdown";
import PortfolioSummary from "../components/portfolioSummary";
import GoalPlanner from "../components/goalPlanner";
import RiskAnalysisPromote from "../components/riskAnalysisPromote";
import "../page-css/HomePage.css";
import { Container, Col, Row } from "react-bootstrap";
import { useRef } from "react";

export default function HomePage() {
  const ref = useRef(null);
  const doClick = () => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <div className="page-title">
        <h5>Welcome to</h5>
        <h3>
          <span style={{ color: "#FFA800" }}>FINANCIAL</span> FRONTIER
        </h3>
      </div>
      <Container>
        <Row className="progress-block">
          <HomeProgress onGoalButtonClick={doClick}></HomeProgress>
        </Row>
        <Row className="allocation-breakdown-block">
          <Col className="allocation-col" sm={5}>
            <AllocationBreakdown isChallenge={false}></AllocationBreakdown>
          </Col>
          <Col className="portfolio-col" sm={7}>
            <PortfolioSummary isChallenge={false}></PortfolioSummary>
          </Col>
        </Row>
        <Row className="goal-planner-block" ref={ref}>
          <GoalPlanner></GoalPlanner>
        </Row>
        <Row className="risk-analysis-block">
          <RiskAnalysisPromote></RiskAnalysisPromote>
        </Row>
      </Container>
    </>
  );
}
