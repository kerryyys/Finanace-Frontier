import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../component-css/tradeQuestEndlessBreadCrumbs.css";
import { Link } from "react-router-dom";

function TradeQuestEndlessBreadCrumbs() {
  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/education" }}>
        Education
      </Breadcrumb.Item>
      <Breadcrumb.Item active>TradeQuest: Endless</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default TradeQuestEndlessBreadCrumbs;
