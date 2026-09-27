"use client";

import Image from "next/image";
import { useAudio, Track } from "../context/AudioContext";

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
  const { currentTrack, isPlaying, currentTime, duration, playTrack, togglePlay, seek } = useAudio();

  const isCurrentTrack = currentTrack?.src === src;
  const isThisPlaying = isCurrentTrack && isPlaying;

  const trackData: Track = {
    id: src,
    src,
    title,
    trackNumber,
    subtitle,
    thumbnail,
  };

  const handleToggle = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else {
      playTrack(trackData);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isCurrentTrack) {
      playTrack(trackData);
    }
    seek(parseFloat(e.target.value));
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const displayCurrentTime = isCurrentTrack ? currentTime : 0;
  const displayDuration = isCurrentTrack ? duration : 0;
  const progressPercent = displayDuration > 0 ? (displayCurrentTime / displayDuration) * 100 : 0;

  return (
    <div className={`audio-player-container ${isThisPlaying ? "is-playing" : ""}`}>
      <div className="player-main-row">
        {thumbnail && (
          <div
            className="player-thumbnail"
            onClick={handleToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggle();
              }
            }}
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
              <span className="thumb-play-icon">{isThisPlaying ? "❚❚" : "▶"}</span>
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
              onClick={handleToggle}
              type="button"
              aria-label={isThisPlaying ? `Pausar ${title}` : `Reproducir ${title}`}
            >
              <span className="play-icon">{isThisPlaying ? "❚❚" : "▶"}</span>
              <span>{isThisPlaying ? "PAUSAR" : "ESCUCHAR"}</span>
            </button>

            <div className="time-display">
              <span>{formatTime(displayCurrentTime)}</span>
              <span className="time-separator">/</span>
              <span>{formatTime(displayDuration)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-bar-wrapper">
        <input
          type="range"
          min="0"
          max={displayDuration || 100}
          value={displayCurrentTime}
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
