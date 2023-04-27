/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, {useCallback, useMemo, useState} from 'react';
import './App.css';

export default function App() {
  return <div className="App">
    <RandomColorButtonsPanel/>
  </div>;
}

const RandomColorButton = React.memo(({color, onClick}) => {
  return (
      <button
        onClick={onClick}
        style={{
          width: '50px',
          height: '50px',
          background: color,
          margin: '10px'
        }}
      />
  );
})

function RandomColorButtonsPanel() {
  const colors = useMemo(() => ['yellow', 'blue', 'green', 'red', 'pink', 'purple'], []);
  const getRandomColor = useCallback(() => colors[Math.round(Math.random() * (colors.length - 1))], [colors]);
  const [randomColor1, setRandomColor1] = useState(colors[0]);
  const [randomColor2, setRandomColor2] = useState(colors[0]);

  const changeRandomColor1 = useCallback(() => setRandomColor1(getRandomColor()), [getRandomColor]);
  const changeRandomColor2 = useCallback(() => setRandomColor2(getRandomColor()), [getRandomColor]);

  return <div>
    <RandomColorButton color={randomColor1} onClick={changeRandomColor1}/>
    <RandomColorButton color={randomColor2} onClick={changeRandomColor2}/>
  </div>
}