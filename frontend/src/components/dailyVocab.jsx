import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; //Override
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../component-css/dailyVocab.css";

function DailyVocab() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="dailyVocabContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text"
          />
          <Breadcrumb>
            <Breadcrumb.Item href="#">History</Breadcrumb.Item>
          </Breadcrumb>
          <Carousel.Caption>
            <h5>Daily Vocabulary</h5>
            <h1>Profit</h1>
            <p>Money that is earned in trade or business after paying the costs of producing and selling goods and services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text"
          />
          <Breadcrumb>
            <Breadcrumb.Item href="#">History</Breadcrumb.Item>
          </Breadcrumb>
          <Carousel.Caption>
            <h5>Daily Vocabulary</h5>
            <h1>Commensurate</h1>
            <p>In a correct and suitable amount compared to something else.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text"
            alt="Third slide"
          />
          <Breadcrumb>
            <Breadcrumb.Item href="#">History</Breadcrumb.Item>
          </Breadcrumb>
          <Carousel.Caption>
            <h5>Daily Vocabulary</h5>
            <h1>Diversification</h1>
            <p>A technique investors use to reduce the risk of losing money by spreading investments across a variety of industries and assets.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DailyVocab;
