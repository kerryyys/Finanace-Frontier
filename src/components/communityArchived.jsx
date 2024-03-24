import "../component-css/communityArchived.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function CommunityArchived() {
  const archivedTopicList = [
    {
      id: 1,
      img: "../../Resources/Profile1.png",
      title: "Pro Tips of Capital Market",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam unde reiciendis accusamus natus id placeat autem maxime amet quisquam expedita est velit blanditiis doloribus itaque nihil dolorem impedit culpa quas voluptatibus, modi quo, facere minima sed. Nostrum at tempora eveniet distinctio quibusdam numquam voluptates asperiores. At nobis eaque corporis.",
    },
    {
      id: 2,
      img: "../../Resources/Profile3.png",
      title: "Sharpen Your Financial Skill",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam unde reiciendis accusamus natus id placeat autem maxime amet quisquam expedita est velit blanditiis doloribus itaque nihil dolorem impedit culpa quas voluptatibus, modi quo, facere minima sed. Nostrum at tempora eveniet distinctio quibusdam numquam voluptates asperiores. At nobis eaque corporis.",
    },
    {
      id: 3,
      img: "../../Resources/Profile1.png",
      title: "Stock Market Overwatch",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam unde reiciendis accusamus natus id placeat autem maxime amet quisquam expedita est velit blanditiis doloribus itaque nihil dolorem impedit culpa quas voluptatibus, modi quo, facere minima sed. Nostrum at tempora eveniet distinctio quibusdam numquam voluptates asperiores. At nobis eaque corporis.",
    },
  ];

  return (
    <>
      <div className="community-archived-container">
        <h4>Archived</h4>
        <div className="archived-topic-list">
          {archivedTopicList.map((item) => {
            return (
              <div className="archived-item" key={item.id}>
                <img src={item.img} alt="" className="community-profile-pic" />
                <div className="archived-item-texts">
                  <div className="topic-title-stats">
                    <p className="topic-title">{item.title}</p>
                  </div>
                  <p className="topic-content">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Button variant="view-more">
          VIEW MORE <i className="bi bi-chevron-right"></i>
        </Button>
      </div>
    </>
  );
  // return(
  //     <Card id="communityArchived">
  //         <h2>Archived</h2>
  //         <div id="archivedContainer">
  //             <div>
  //             <Card.Img src="Resources/Profile1.png" className="card-img"/>
  //             </div>
  //             <div>
  //                 <Card.ImgOverlay>
  //                     <Button>
  //                         <Card.Title>Pro Tips of Capital Market</Card.Title>
  //                     </Button>
  //                     <Card.Text>Before diven into the topic, we have to know what is capital market. Capital market is....</Card.Text>
  //                 </Card.ImgOverlay>
  //             </div>
  //         </div>
  //         <div id="archivedContainer">
  //             <div>
  //             <Card.Img src="Resources/Profile3.png" className="card-img"/>
  //             </div>
  //             <div>
  //                 <Card.ImgOverlay>
  //                     <Button>
  //                         <Card.Title>Sharpen Your Financial Skill</Card.Title>
  //                     </Button>
  //                     <Card.Text>What kind of skill considered as the essential financial skill. Let me introduce....</Card.Text>
  //                 </Card.ImgOverlay>
  //             </div>
  //         </div>
  //         <div id="archivedContainer">
  //             <div>
  //             <Card.Img src="Resources/Profile1.png" className="card-img"/>
  //             </div>
  //             <div>
  //                 <Card.ImgOverlay>
  //                     <Button>
  //                         <Card.Title>Stock Market Overwatch</Card.Title>
  //                     </Button>
  //                     <Card.Text>Malaysia stock market is overwhelming with....</Card.Text>
  //                 </Card.ImgOverlay>
  //             </div>
  //         </div>
  //         <div className="viewMore">
  //             <Card.Link href="#">View More {'>'}</Card.Link>
  //         </div>
  //     </Card>
  // )
}

export default CommunityArchived;
