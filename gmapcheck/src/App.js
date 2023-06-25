import React from "react";
import "./App.css";
import MapComponent from "./components/Map";

function App() {
  return (
    <div className="App">
      <div>
      <h1> this is our react app with google maps integrated in it !</h1>
      <p style={{color:"blueviolet"}}> in this map is represented the city where I currently live:</p>
      </div>
       <div style={{padding:'auto'}}><MapComponent/> </div>
    </div>
  );
}

export default App;
