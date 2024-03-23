import "../component-css/riskAnalysisPromote.css";
import { Badge, Button } from "react-bootstrap";

function RiskAnalysisPromote() {
  return (
    <>
      <div className="risk-analysis-promote-container">
        <Badge bg="warning" className="badge-premium">
          Premium Only
        </Badge>
        <h3>Risk Analysis</h3>
        <p>
          Gain insights in portfolio's market risks, receiving personalized
          suggestions.
        </p>
        <p style={{ color: "#FFD37F" }}>
          Based on game decisions, and challenge outcomes for analysis
        </p>
        <Button className="coming-soon-btn" disabled>
          Coming Soon
        </Button>
        <img src="../../Resources/graph-up.png" alt="" id="graph-up-img" />
        <img src="../../Resources/graph-down.png" alt="" id="graph-down-img" />
      </div>
    </>
  );
}
export default RiskAnalysisPromote;
