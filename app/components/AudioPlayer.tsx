"use client";

import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const handlePauseOthers = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail !== src && audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    window.addEventListener("pause-other-audio", handlePauseOthers);
    return () => window.removeEventListener("pause-other-audio", handlePauseOthers);
  }, [src, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      window.dispatchEvent(new CustomEvent("pause-other-audio", { detail: src }));
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player-container">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="player-controls">
        <button
          className="play-button"
          onClick={togglePlay}
          type="button"
          aria-label={isPlaying ? `Pausar ${title}` : `Reproducir ${title}`}
        >
          <span className="play-icon">{isPlaying ? "❚❚" : "▶"}</span>
          <span>{isPlaying ? "PAUSAR " : "REPRODUCIR "} {title.toUpperCase()}</span>
        </button>

        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span className="time-separator">/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="progress-bar-wrapper">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="progress-slider"
          aria-label="Progreso de reproducción"
        />
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
