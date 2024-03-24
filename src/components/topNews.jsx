import "../component-css/topNews.css";
import { Link } from "react-router-dom";

function TopNews() {
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
      <div className="top-news-container">
        <h4>Today's Top News</h4>
        <div className="top-news-item-list">
          {topNewsList.map((item) => {
            return (
              <Link to="/news" className="carousel-link" key={item.id}>
                <div className="top-news-item">
                  <img src={item.img} alt="" className="top-news-img" />
                  <div className="top-news-text">
                    <h6 className="news-title">{item.title}</h6>
                    <div className="desc-text">{item.desc}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TopNews;
