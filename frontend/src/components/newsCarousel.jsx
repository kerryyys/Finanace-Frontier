import { Carousel } from "react-bootstrap";
import "../component-css/newsCarousel.css";
import { Link } from "react-router-dom";

function NewsCarousel() {
  const topNewsList = [
    {
      id: 1,
      img: "../../Resources/news3.png",
      title: "Tech Stocks Soar to New Heights",
      desc: "Major tech stocks, including Apple, Amazon, and Microsoft, reached record highs today, driven by strong earnings reports and optimism about the economy's recovery.",
    },
    {
      id: 2,
      img: "../../Resources/news2.png",
      title: "Investors Eyeing Crypto Market",
      desc: "With Bitcoin and other cryptocurrencies showing signs of stability, investors are cautiously optimistic about the future of digital assets in the financial market.",
    },
    {
      id: 3,
      img: "../../Resources/news3.png",
      title: "Oil Prices Surge Amid Supply Concerns",
      desc: "Oil prices jumped more than 5% today as supply disruptions in key oil-producing regions raised concerns about global energy supplies.",
    },
  ];
  return (
    <>
      <Carousel id="news-carousel">
        {topNewsList.map((item) => {
          return (
            <Carousel.Item key={item.id} interval={1000}>
              <Link to="/news" className="carousel-link">
                <img className="carousel-img" src={item.img} />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
export default NewsCarousel;
