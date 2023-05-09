import React from "react";
import "./App.css";
import Page2 from "./Pages/Page2/Page2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Page2></Page2>
    // <Router>
    //   <Page2 />
    //   <Routes>
    //     <Route exact path="/" element={<App />} />
    //     <Route path="/Page2" element={<Page2 />} />
    //     <div className="App">
    //       <div className="grid-container">
    //         <header className="App-header">
    //           <div className="Box1">
    //             <h1>
    //               Anna <br></br> Nilm
    //             </h1>
    //           </div>
    //           <div className="box2">
    //             <img src="girl.png" className="girl box2" alt="girl"></img>
    //           </div>

    //           <button className="about">About me</button>

    //           <div className="box4">
    //             <h3>Aspiring Web Developer</h3>
    //           </div>
    //           <div className="box5">
    //             <h3 className="contact">Contact Me </h3>
    //           </div>
    //         </header>
    //       </div>
    //     </div>
    //   </Routes>
    // </Router>
  );
}

export default App;
