import { useState, useRef } from 'react';
import './style.css';

interface PlayerProps {
  src: string;
}

export const Player = ({ src }: PlayerProps): JSX.Element => {
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null!);

  const handlePlay = () => {
    const newPlaying = !playing;
    setPlaying(!playing);
    if (newPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src}></audio>
      <div className="player-controls">
        <button
          onClick={handlePlay}
          className={playing ? 'play-button play' : 'play-button pause'}
        ></button>
      </div>
    </>
  );
};

export default Player;
