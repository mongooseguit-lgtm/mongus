"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface AudioPlayerProps {
  src: string;
  title: string;
  trackNumber?: string;
  subtitle?: string;
  thumbnail?: string;
}

export default function AudioPlayer({
  src,
  title,
  trackNumber,
  subtitle,
  thumbnail,
}: AudioPlayerProps) {
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
    if (isNaN(seconds) || seconds === 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`audio-player-container ${isPlaying ? "is-playing" : ""}`}>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      <div className="player-main-row">
        {thumbnail && (
          <div
            className="player-thumbnail"
            onClick={togglePlay}
            role="button"
            tabIndex={0}
            aria-label={`Reproducir ${title}`}
          >
            <Image
              src={thumbnail}
              alt={title}
              width={76}
              height={76}
              className="player-thumb-img"
            />
            <div className="thumb-overlay">
              <span className="thumb-play-icon">{isPlaying ? "❚❚" : "▶"}</span>
            </div>
          </div>
        )}

        <div className="player-track-info">
          <div className="player-track-header">
            {trackNumber && <span className="track-number">{trackNumber}</span>}
            <span className="track-title">{title}</span>
            {subtitle && <span className="track-badge">{subtitle}</span>}
          </div>

          <div className="player-controls">
            <button
              className="play-button"
              onClick={togglePlay}
              type="button"
              aria-label={isPlaying ? `Pausar ${title}` : `Reproducir ${title}`}
            >
              <span className="play-icon">{isPlaying ? "❚❚" : "▶"}</span>
              <span>{isPlaying ? "PAUSAR" : "ESCUCHAR"}</span>
            </button>

            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span className="time-separator">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
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
          aria-label={`Progreso de ${title}`}
        />
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
