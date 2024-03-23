import "../component-css/allocationBreakdown.css";
import { Image } from "react-bootstrap";

function AllocationBreakdown({ isChallenge }) {
  return (
    <>
      <div
        className={`allocation-container ${
          isChallenge ? "challenge-background" : "default-background"
        }`}
      >
        <h3>
          Allocation
          <br />
          Breakdown
        </h3>
        {isChallenge && (
          <div id="weekly-challenge-bg">
            <p>Weekly Challenge</p>
          </div>
        )}
        <div className="chart-container">
          <Image
            src="../../Resources/allocationchart.png"
            id="allocation-chart"
          ></Image>
          <div className="score-container">
            <p>Diversification Score</p>
            <h3 className="diverse-score">A-</h3>
          </div>
        </div>
      </div>
    </>
  );
}
AllocationBreakdown.defaultProps = {
  isChallenge: false,
};
export default AllocationBreakdown;
