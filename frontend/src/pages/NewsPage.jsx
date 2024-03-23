import { Container, Col, Row, Carousel } from "react-bootstrap";
import "../page-css/NewsPage.css";
import NewsCarousel from "../components/newsCarousel";
import TopNews from "../components/topNews";
import SuggestedNews from "../components/suggestedNews";

function NewsPage() {
  return (
    <>
      <div className="page-title">
        <h1>News & Info</h1>
      </div>
      <Container className="news-block">
        <Row className="news-top-block">
          <Col sm={7}>
            <NewsCarousel></NewsCarousel>
          </Col>
          <Col sm={5}>
            <TopNews></TopNews>
          </Col>
        </Row>
        <Row className="news-bottom-block">
          <SuggestedNews></SuggestedNews>
        </Row>
      </Container>
    </>
  );
}

export default NewsPage;
