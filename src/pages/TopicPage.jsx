import {
  Container,
  Col,
  Row,
  Breadcrumb,
  Button,
  FloatingLabel,
  Form,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../page-css/TopicPage.css";

function TopicPage() {
  const [likeCount, setLikeCount] = useState(10);
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };
  return (
    <Container className="topic-container">
      <h1>Community</h1>
      <div className="topic-breadcrumb-search">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/community" }}>
            Community
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Discussion</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row className="topic-post">
        <Col sm={4}>
          <div className="post-op">
            <img src="../../Resources/Clothing.png" alt="" />
            <div className="name-time">
              <p className="name">zhengyu</p>
              <p className="time">30 min. ago</p>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <div className="post-content">
            <h3 className="post-title">
              Can someone explain the concept of risk management in a simple
              way?
            </h3>
            <p className="post-text">
              Hi all, I just joined the world of capital market. I heard the
              term risk management gets thrown around pretty often, can you guys
              explain what it means? Thanks in advance.
            </p>
            <div className="topic-stats">
              10 replies • {likeCount}{" "}
              <i
                className={`bi bi-chevron-double-up like-btn ${
                  liked ? "liked" : ""
                }`}
                onClick={() => handleLikeClick()}
              ></i>
            </div>
            <Form.Label>
              <Form.Control type="test" placeholder="Comment here" />
            </Form.Label>
          </div>
        </Col>
      </Row>
      <Dropdown className="topic-comment-dropdown">
        <Dropdown.Toggle variant="success">Sort</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/latest">Latest</Dropdown.Item>
          <Dropdown.Item href="#/top">Top</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row className="topic-comment">
        <Col sm={4}>
          <div className="post-op">
            <img src="../../Resources/Clothing.png" alt="" />
            <div className="name-time">
              <p className="name">yaozhi</p>
              <p className="time">30 min. ago</p>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <div className="post-content">
            <p className="post-text">
              Risk management is the process of identifying, assessing, and
              prioritizing risks to minimize, monitor, and control the
              probability or impact of unfortunate events or to maximize the
              realization of opportunities. It involves understanding potential
              risks to a project, business, or investment and taking steps to
              mitigate or avoid those risks.
            </p>
            <div className="topic-stats">
              10 replies • {likeCount}{" "}
              <i
                className={`bi bi-chevron-double-up like-btn ${
                  liked ? "liked" : ""
                }`}
                onClick={() => handleLikeClick()}
              ></i>
            </div>
            <Form.Label>
              <Form.Control type="test" placeholder="Comment here" />
            </Form.Label>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TopicPage;
