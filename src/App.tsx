import './App.css';
import Player from './components/Player/Player';
import song from '../public/fools-garden-lemon-tree.mp3';
import Lyrics from './components/Lyrics/Lyrics';
import lyrics from './lyrics-lines.ts';
import { useState } from 'react';

function App() {
  const [currenIndex, _] = useState<number>(10);
  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player src={song} />
      <Lyrics lines={lyrics} currentLineIndex={currenIndex} />
    </div>
  );
}

export default App;
