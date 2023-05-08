import "./App.css";
// import Page2 from './Pages/Page2/Page2';



function App() {
  return (
    // <div className="App">
    <div className='grid-container'>
      {/* <header className="App-header"> */}
     
      <div className='Box1'>
        <h1 >Anna <br></br> Nilm</h1>
        </div>
        <div className='box2'>
      <img src='girl.png' className="girl box2"alt='girl'></img>
      </div>
     
        {/* <div className="about Box3">About me */}
        <button className="about">About me</button>
        {/* </div> */}
       <div className="box4">
        <h3>Aspiring Web Developer</h3>
        </div>
      <div className="box5">
        <h3 className='contact'>Contact Me </h3>
       </div>
      {/* </header> */}
    </div>
   
   
  );
}

export default App;
