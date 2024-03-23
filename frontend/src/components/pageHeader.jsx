import Badge from 'react-bootstrap/Badge';
import '../component-css/pageHeader.css';

function PageHeader() {
  return (
    <div id="pageHeader">
      <h1>
        Education<Badge bg="secondary">Learn from Our Game & Tutorial</Badge>
      </h1>
    </div>
  );
}
export default PageHeader;