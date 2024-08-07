import { useState, useRef } from 'react';
import './style.css';

interface PlayerProps {
  src: string;
  onTimeUpdate: (time: number) => void;
}

export const Player = ({ src, onTimeUpdate }: PlayerProps): JSX.Element => {
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

  const addCurrentTime = (e: React.SyntheticEvent) => {
    const audioElement = e.target as HTMLAudioElement;

    onTimeUpdate(audioElement.currentTime);
  };

  return (
    <>
      <audio ref={audioRef} onTimeUpdate={addCurrentTime} src={src}></audio>
      <div className="player-controls">
        <button
          onClick={handlePlay}
          className={playing ? 'play-button pause' : 'play-button play'}
        ></button>
      </div>
    </>
  );
};

export default Player;
