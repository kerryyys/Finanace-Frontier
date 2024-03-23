import "../component-css/communityTrending.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CommunityTrending() {
  const [trendingTopicList, setTrendingTopicList] = useState([
    {
      id: 1,
      img: "../../Resources/Profile1.png",
      title: "Introduction to Capital Market",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam unde reiciendis accusamus natus id placeat autem maxime amet quisquam expedita est velit blanditiis doloribus itaque nihil dolorem impedit culpa quas voluptatibus, modi quo, facere minima sed. Nostrum at tempora eveniet distinctio quibusdam numquam voluptates asperiores. At nobis eaque corporis.",
      reply: 10,
      like: 10,
      liked: false,
    },
    {
      id: 2,
      img: "../../Resources/Profile2.png",
      title: "Differentiation in Digital Marketing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam unde reiciendis accusamus natus id placeat autem maxime amet quisquam expedita est velit blanditiis doloribus itaque nihil dolorem impedit culpa quas voluptatibus, modi quo, facere minima sed. Nostrum at tempora eveniet distinctio quibusdam numquam voluptates asperiores. At nobis eaque corporis.",
      reply: 10,
      like: 10,
      liked: false,
    },
    {
      id: 3,
      img: "../../Resources/Profile3.png",
      title: "Financial Tips for Everyone",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam unde reiciendis accusamus natus id placeat autem maxime amet quisquam expedita est velit blanditiis doloribus itaque nihil dolorem impedit culpa quas voluptatibus, modi quo, facere minima sed. Nostrum at tempora eveniet distinctio quibusdam numquam voluptates asperiores. At nobis eaque corporis.",
      reply: 10,
      like: 10,
      liked: false,
    },
  ]);

  const handleLikeClick = (id) => {
    setTrendingTopicList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? {
              ...item,
              like: item.liked ? item.like - 1 : item.like + 1,
              liked: !item.liked,
            }
          : item
      )
    );
  };
  return (
    <>
      <div className="community-trending-container">
        <h3>Trending</h3>
        <div className="trending-topic-list">
          {trendingTopicList.map((item) => {
            return (
              <Link to="/community/topic1" key={item.id}>
                <div className="trending-item">
                  <img
                    src={item.img}
                    alt=""
                    className="community-profile-pic"
                  />
                  <div className="trending-item-texts">
                    <div className="topic-title-stats">
                      <p className="topic-title">{item.title}</p>
                      <div className="topic-stats">
                        {item.reply} replies • {item.like}{" "}
                        <i
                          className={`bi bi-chevron-double-up like-btn ${
                            item.liked ? "liked" : ""
                          }`}
                          onClick={() => handleLikeClick(item.id)}
                        ></i>
                      </div>
                    </div>
                    <p className="topic-content">{item.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Button variant="view-more">
          VIEW MORE <i className="bi bi-chevron-right"></i>
        </Button>
      </div>
    </>
  );
}

export default CommunityTrending;
