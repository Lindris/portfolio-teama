import React from "react";

// import '../../App.css';
import "./Page2.css";

function Page2() {
  return (
    <div className="Page2">
      <div></div>

      <div className="grid-container">
        <div className="Image Box3">
          Box3
          <img src="desk.png" className="desk" alt="desk"></img>
        </div>
        <div className="Background Box1">
          <h3 className="Background-heading">Background</h3>
          <div className="Background-list Box1">
            <p>background paragraph 1</p>
            <br></br>
            <p>background paragraph 2</p>
            <br></br>
            <p>background paragraph 3</p>
            <br></br>
          </div>
        </div>

        <div className="Expertise Box2">

          <h3>Expertise</h3>
          <ul>
            <li>expertise bullet 2</li><br></br><br></br>
            <br></br>
            <li>expertise bullet 3</li><br></br><br></br>
            <br></br>
            <li>expertise bullet 2</li><br></br><br></br>
            <br></br>
            <li>expertise bullet 3</li><br></br><br></br>
            <br></br>
          </ul>
        </div>
        <button className="home">Return to Home</button>
      </div>
     
    </div>
  );
}

export default Page2;
