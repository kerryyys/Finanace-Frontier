import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../component-css/tradeQuestEndlessBreadCrumbs.css';
function TradeQuestEndlessBreadCrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <span className="separator">/</span>
      <Breadcrumb.Item href="#">Education</Breadcrumb.Item>
      <span className="separator">/</span>
      <Breadcrumb.Item active>TradeQuest: Endless</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default TradeQuestEndlessBreadCrumbs;
