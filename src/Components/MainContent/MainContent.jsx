import './MainContent.css'
import { useState } from "react";

const MainContent = () => {


  
const studentInfo = {
  name: "Mustafa Rahman",
  batch: "1st",
  courseName: "ReactJS with Prisma",
  assignmentName: "Change Text with simple Button",
  assignmentNo: "6",
  moduleNo: "6",
};

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    alert('Saved The Text: '+ `${text}`);
    
  };
  const handleButtonClear= () => {
    setText('');
    
  };

  return (
    <>
      <div className="main">
        <div className="first-content bg-dark">
          <textarea value={text} onChange={handleChange} placeholder="Type Here..." />
          <div className="button-container">
            <button className="save-btn" onClick={handleButtonClick}>Save Text</button>
            <button className="clear-btn" onClick={handleButtonClear}>Clear Text</button>
          </div>
          <p className="show-text text-warning">
            Entered Text: <span className="text-highlight">{text}</span>{" "}
          </p>
        </div>

        <div className="second-content card-container ">
          <div className="card bg-dark">
            <p className="card-info">
              <span className="card-label">Student Name:</span>{" "}
              {studentInfo.name}
            </p>
            <p className="card-info">
              <span className="card-label">Batch:</span> {studentInfo.batch}
            </p>
            <p className="card-info">
              <span className="card-label">Course Name:</span>{" "}
              {studentInfo.courseName}
            </p>
            <p className="card-info">
              <span className="card-label">Assignment Name:</span>{" "}
              {studentInfo.assignmentName}
            </p>
            <p className="card-info">
              <span className="card-label">Assignment No.:</span>{" "}
              {studentInfo.assignmentNo}
            </p>
            <p className="card-info">
              <span className="card-label">Module No.:</span>{" "}
              {studentInfo.moduleNo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
