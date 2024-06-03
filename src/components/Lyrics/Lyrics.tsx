import './style.css';
import { useEffect, useRef } from 'react';

interface LyricsLines {
  time: number;
  text: string;
}

interface LyricsProps {
  lines: LyricsLines[];
  currentLineIndex: number;
}

export const Lyrics = ({
  lines,
  currentLineIndex,
}: LyricsProps): JSX.Element => {
  const currentLineRef = useRef<HTMLParagraphElement>(null!);

  useEffect(() => {
    currentLineRef.current.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }, [currentLineIndex]);

  return (
    <div className="lyrics">
      {lines.map((item, index) => (
        <p
          ref={index === currentLineIndex ? currentLineRef : null}
          className={currentLineIndex === index ? 'current-line' : ''}
          key={index}
        >
          {item.text}
        </p>
      ))}
    </div>
  );
};

export default Lyrics;
