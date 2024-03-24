import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../component-css/dailyVocab.css";

function DailyVocab() {
  const vocabList = [
    {
      id: 1,
      img: "../../Resources/CarouselImage.png",
      header: "Daily Vocabulary", 
      title: "Profit",
      desc: "Money that is earned in trade or business after paying the costs of producing and selling goods and services.",
    },
    {
      id: 2,
      img: "../../Resources/CarouselImage.png",
      header: "Daily Vocabulary",
      title: "Commensurate",
      desc: "In a correct and suitable amount compared to something else.",
    },
    {
      id: 3,
      img: "../../Resources/CarouselImage.png",
      header: "Daily Vocabulary",
      title: "Diversification",
      desc: "A technique investors use to reduce the risk of losing money by spreading investments across a variety of industries and assets.",
    },
  ];

  return (
    <Carousel id="dailyVocabContainer">
        {vocabList.map((item) => {
          return (
            <Carousel.Item key={item.id} interval={1000}>
              <Link to="#" className="carousel-link">
                <img className="carousel-img" src={item.img} />
                <Carousel.Caption>
                  <h6>history</h6>
                  <h5>{item.header}</h5>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
  )
}

export default DailyVocab;
