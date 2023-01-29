import React, { useEffect, useState, Fragment } from 'react';
import './App.scss';
import Square from './components/square/Square';
import { DisplayHeight, DisplayWidth } from './components/DisplaySize';

function App() {

  const [x, setX] = useState(window.innerWidth);
  const [y, setY] = useState(window.innerHeight);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => { setY(DisplayHeight(e)); setX(DisplayWidth(e)); });
    window.addEventListener("mousemove", () => {
      window.addEventListener("mousedown", () => setIsDrawing(true))
      window.addEventListener("mouseup", () => setIsDrawing(false))
    });
  }, [])

  const SquaresHorizontal = () => {
    let squareArray = [];
    for (let i = 0; i < Math.floor(x / 46); i++) {
      squareArray.push(
        <Fragment key={i}>
          <Square width={x} height={y} isDrawing={isDrawing} />
        </Fragment>
      );
    }
    return squareArray;
  }

  const SquaresAll = () => {
    let squareLineArray = [];
    for (let i = 0; i < Math.floor(y / 46); i++) {
      squareLineArray.push(
        <div className='App' key={i}>
          {SquaresHorizontal()}
        </div>
      )
    }
    return squareLineArray;
  }

  return (SquaresAll());
}

export default App;