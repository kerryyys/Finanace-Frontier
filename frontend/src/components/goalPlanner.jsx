import "../component-css/goalPlanner.css";
import { Button, ProgressBar } from "react-bootstrap";

function GoalPlanner({ timerValue }) {
  return (
    <>
      <div className="goal-planner-container">
        <h3>Wealth Compass: Goal Planner</h3>
        <div className="goal-item">
          <div className="goal-item-left">
            <h4>Weekly Challenge Goal</h4>
            <p>Reach a target of $700.00</p>
            <p className="goal-target">$107.22 Left</p>
            <ProgressBar now={70} variant="success"></ProgressBar>
          </div>
          <div className="goal-item-right">
            <Button disabled className="goal-item-btn">
              00:06:35
            </Button>
          </div>
        </div>
        <Button size="lg">SET A NEW GOAL</Button>
      </div>
    </>
  );
}

export default GoalPlanner;
