import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../component-css/tradeQuestEndlessBreadCrumbs.css';
import { Link } from 'react-router-dom';

function TradeQuestEndlessBreadCrumbs() {
  return (
    <Breadcrumb>
      <Link to="/"><Breadcrumb.Item href="/">Home</Breadcrumb.Item></Link>
      <span className="separator">/</span>
      <Link to="/education"><Breadcrumb.Item href="/education">Education</Breadcrumb.Item></Link>
      <span className="separator">/</span>
      <Breadcrumb.Item active>TradeQuest: Endless</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default TradeQuestEndlessBreadCrumbs;
