import './App.css';
import Player from './components/Player/Player';
import song from '../public/fools-garden-lemon-tree.mp3';

function App() {
  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player src={song} />
      <div className="lyrics">
        <p>I'm sittin' here in the boring room</p>
        <p>It's just another rainy Sunday afternoon</p>
        <p>I'm wasting my time I got nothin' to do</p>
        <p>I'm hangin' around I'm waitin' for you</p>
        <p>But nothing ever happens and I wonder</p>
        <p>I'm drivin' around in my car</p>
        <p>I'm drivin' too fast I'm drivin' too far</p>
        <p>I'd like to change my point of view</p>
        <p>I feel so lonely I'm waitin' for you</p>
      </div>
    </div>
  );
}

export default App;
