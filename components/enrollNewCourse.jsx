import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../component-css/enrollNewCourse.css"
import { Link } from "react-router-dom";

function EnrollNewCourse() {
    const newCourseList = [
        {
          id: 1,
          img: "../../Resources/Business.png",
          title: "Introduction to Capital Market",
          desc: "California Institute of Finance",
          label2: "Professional Certificate",
          view: "12123",
        },
        {
          id: 2,
          img: "../../Resources/Clothing.png",
          title: "All about Risk Management",
          desc: "Norway Institute of Finance",
          label1: "Beginner",
          view: "45363",
        },
        {
          id: 3,
          img: "../../Resources/Clothing1.png",
          title: "What are bonds and stocks?",
          desc: "Norway Institute of Finance",
          label1: "Beginner",
          label2: "Professional Certificate",
          view: "121",
        },
      ];
    
    return (
        <Card id="enrollNewCourse">
            <div className="header-wrapper">
                <h3>Enroll in New Course:</h3>
                <img src="Resources/searchGroup.png" alt="Search Group" className="search-group-img" />
            </div>
            <div id="courseContainer">
                {newCourseList.map((item) => {
                return (
                <Link to="#" className="carousel-link">
                    <div className="course-item" key={item.id}>
                    <img src={item.img} alt="" className="course-img" />
                    <div className="course-text">
                        <h6 className="course-title">{item.title}</h6>
                        <div className="desc-text">{item.desc}</div>
                        <div className="course-label1">{item.label1}</div>
                        <div className="course-label2">{item.label2}</div>
                        <div className="course-view">{item.view}</div>
                    </div>
                    </div>
                </Link>
                  );
                })}
            </div>
        </Card>
    );
}

export default EnrollNewCourse;
