import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../page-css/ChallengePage.css";
import { Container, Alert } from "react-bootstrap";
import ChallengeLevel from "../components/challengeLevel";
import { useEffect, useState } from "react";

export default function ChallengePage() {
  const [timerValue, setTimerValue] = useState(8247);
  const [buttonCondition, setButtonCondition] = useState("locked");

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerValue > 0) {
        setTimerValue((prevTimerValue) => prevTimerValue - 1);
      } else {
        clearInterval(timer);
        setButtonCondition("open");
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timerValue]);
  return (
    <>
      <div className="page-title">
        <h1>Weekly Challenge</h1>
        <h5>virtual trading with real time stock-data</h5>
      </div>
      <Container className="container challenge-container">
        <Alert key="danger" variant="danger" id="disclaimer">
          <p>
            <strong>DISCLAIMER: </strong>The prize pool value is subject to
            change in real-time based on the number of participants and market
            conditions. The website reserves the right to adjust prize pool
            amounts accordingly without prior notice.
          </p>
        </Alert>
        <ChallengeLevel
          level={"Beginner"}
          progress={40}
          period={"3D 20H left"}
          condition={"open"}
          prize={300.0}
          entries={30}
        ></ChallengeLevel>
        <ChallengeLevel
          level={"Intermediate"}
          progress={100}
          period={"End"}
          condition={buttonCondition}
          timerValue={timerValue}
          prize={4676.0}
          entries={276}
        ></ChallengeLevel>
        <ChallengeLevel
          level={"Advanced"}
          progress={60}
          period={"2D 20H left"}
          condition={"high-level"}
          prize={8847.0}
          entries={5735}
        ></ChallengeLevel>
      </Container>
    </>
  );
}
