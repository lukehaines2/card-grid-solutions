import React from 'react';
import './App.css';

const colours = ["lightblue", "lightgrey", "orange", "silver", "lightgreen", "hotpink"];

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        {colours.map((colour, idx) => (
          <div key={colour[idx]} className="card">
            <div className="thumbnail" style={{ background: colour }}></div>
            <div className="text">
              <div className="title">I am a card Title</div>
              <div className="subheader">I am some random smaller text talking about the image!</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
