import './App.css';
import Player from './components/Player/Player';
import song from '../public/fools-garden-lemon-tree.mp3';
import Lyrics from './components/Lyrics/Lyrics';
import lyrics from './lyrics-lines.ts';
import { useState } from 'react';

function App() {
  const [currenIndex, setCurrentIndex] = useState<number>(-1);

  const handleTimeUpdate = (time: number): void => {
    let lastIndex = -1;

    lyrics.forEach((element, index) => {
      if (element.time <= time) {
        lastIndex = index;
      }
    });
    if (currenIndex !== lastIndex) {
      console.log('render');
      setCurrentIndex(lastIndex);
    }
  };

  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player src={song} onTimeUpdate={handleTimeUpdate} />
      <Lyrics lines={lyrics} currentLineIndex={currenIndex} />
    </div>
  );
}

export default App;
