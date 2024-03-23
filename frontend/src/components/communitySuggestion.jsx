import "../component-css/communitySuggestion.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CommunitySuggestion() {
  const [suggestionTopicList, setSuggestionTopicList] = useState([
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
    setSuggestionTopicList((prevList) =>
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
      <div className="community-suggestion-container">
        <h3>Suggestion</h3>
        <div className="suggestion-topic-list">
          {suggestionTopicList.map((item) => {
            return (
              <div className="suggestion-item" key={item.id}>
                <img src={item.img} alt="" className="community-profile-pic" />
                <div className="suggestion-item-texts">
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
            );
          })}
        </div>
      </div>
    </>
  );
  // return(
  //     <Card id="communitySuggestion">
  //         <h2>Suggested</h2>
  //         <div id="suggestionContainer">
  //             <div>
  //             <Card.Img src="Resources/Profile3.png" className="card-img"/>
  //             </div>
  //             <div>
  //                 <Card.ImgOverlay>
  //                     <Button>
  //                         <Card.Title>Amazing!! Everyone Should Buy XXX Stock!!</Card.Title>
  //                     </Button>
  //                     <Card.Text>Totally not a clickbait....</Card.Text>
  //                     <p1>
  //                         <Button>10 replies</Button>
  //                          •
  //                         <Button onClick={incrementLikes1} style={{ backgroundColor: liked1 ? 'green' : 'transparent' }}>
  //                             {likes1}∧
  //                         </Button>
  //                     </p1>
  //                 </Card.ImgOverlay>
  //             </div>
  //         </div>
  //         <div id="suggestionContainer">
  //             <div>
  //             <Card.Img src="Resources/Profile2.png" className="card-img"/>
  //             </div>
  //             <div>
  //                 <Card.ImgOverlay>
  //                     <Button>
  //                         <Card.Title>How to Apply Physics in Finance</Card.Title>
  //                     </Button>
  //                     <Card.Text>Physics is the king of all science. However, do you know that Finance can relate with Physics?</Card.Text>
  //                     <p1>
  //                         <Button>10 replies</Button>
  //                          •
  //                         <Button onClick={incrementLikes2} style={{ backgroundColor: liked2 ? 'green' : 'transparent' }}>
  //                             {likes2}∧
  //                         </Button>
  //                     </p1>
  //                 </Card.ImgOverlay>
  //             </div>
  //         </div>
  //         <div id="suggestionContainer">
  //             <div>
  //             <Card.Img src="Resources/Profile2.png" className="card-img"/>
  //             </div>
  //             <div>
  //                 <Card.ImgOverlay>
  //                     <Button>
  //                         <Card.Title>Drawing Graph in Marketing Stock</Card.Title>
  //                     </Button>
  //                     <Card.Text>[Graph]</Card.Text>
  //                     <p1>
  //                         <Button>10 replies</Button>
  //                          •
  //                         <Button onClick={incrementLikes3} style={{ backgroundColor: liked3 ? 'green' : 'transparent' }}>
  //                             {likes3}∧
  //                         </Button>
  //                     </p1>
  //                 </Card.ImgOverlay>
  //             </div>
  //         </div>
  //     </Card>
  // )
}

export default CommunitySuggestion;
