"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAudio } from "../context/AudioContext";

export default function GlobalAudioBar() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    seek,
    nextTrack,
    prevTrack,
    isMuted,
    toggleMute,
    dismissPlayer,
  } = useAudio();

  if (!currentTrack) return null;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <aside className="global-audio-bar" aria-label="Reproductor persistente de Mongus">
      {/* Top thin progress line */}
      <div className="bar-progress-container">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={(e) => seek(parseFloat(e.target.value))}
          className="bar-progress-slider"
          aria-label={`Progreso de reproducción de ${currentTrack.title}`}
        />
        <div
          className="bar-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="bar-content">
        {/* Track Info */}
        <div className="bar-track-col">
          {currentTrack.thumbnail && (
            <div className="bar-thumb">
              <Image
                src={currentTrack.thumbnail}
                alt={currentTrack.title}
                width={48}
                height={48}
                className="bar-thumb-img"
              />
            </div>
          )}
          <div className="bar-info-text">
            <div className="bar-title-row">
              {currentTrack.trackNumber && (
                <span className="bar-track-idx">{currentTrack.trackNumber}</span>
              )}
              <span className="bar-track-name">{currentTrack.title}</span>
            </div>
            {currentTrack.subtitle && (
              <span className="bar-track-sub">{currentTrack.subtitle}</span>
            )}
          </div>
        </div>

        {/* Playback Controls */}
        <div className="bar-controls-col">
          <button
            type="button"
            onClick={prevTrack}
            className="bar-ctrl-btn"
            aria-label="Pista anterior"
            title="Anterior"
          >
            ⏮
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="bar-play-btn"
            aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <button
            type="button"
            onClick={nextTrack}
            className="bar-ctrl-btn"
            aria-label="Siguiente pista"
            title="Siguiente"
          >
            ⏭
          </button>

          <div className="bar-time-display">
            <span>{formatTime(currentTime)}</span>
            <span className="bar-time-sep">/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Secondary Actions */}
        <div className="bar-actions-col">
          <button
            type="button"
            onClick={toggleMute}
            className="bar-ctrl-btn bar-mute-btn"
            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            title={isMuted ? "Sonido desactivado" : "Silenciar"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>

          <Link href="/musica" className="bar-view-album-link">
            VER DISCO ↗
          </Link>

          <button
            type="button"
            onClick={dismissPlayer}
            className="bar-close-btn"
            aria-label="Cerrar reproductor"
            title="Cerrar"
          >
            ✕
          </button>
        </div>
      </div>
    </aside>
  );
}
