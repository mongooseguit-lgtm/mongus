"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from "react";

export interface Track {
  id: string;
  src: string;
  title: string;
  subtitle?: string;
  trackNumber?: string;
  thumbnail?: string;
}

export const TRACK_LIST: Track[] = [
  {
    id: "under-the-rain-m2",
    src: "/audio/under-the-rain-m2.m4a",
    title: "UNDER THE RAIN",
    trackNumber: "01",
    subtitle: "MASTER M2 · 4:51",
    thumbnail: "/photos/thumb-under-the-rain.jpeg",
  },
  {
    id: "battle",
    src: "/audio/battle.m4a",
    title: "BATTLE",
    trackNumber: "02",
    subtitle: "MASTER · 6:47",
    thumbnail: "/photos/thumb-battle.jpeg",
  },
  {
    id: "i-know",
    src: "/audio/i-know.m4a",
    title: "I KNOW",
    trackNumber: "03",
    subtitle: "STUDIO DESK · 5:51",
    thumbnail: "/photos/thumb-i-know.jpg",
  },
  {
    id: "under-the-rain-classic",
    src: "/audio/under-the-rain-classic.mp3",
    title: "UNDER THE RAIN",
    trackNumber: "04",
    subtitle: "ORIGINAL MIX · 4:46",
    thumbnail: "/photos/thumb-under-the-rain-classic.jpg",
  },
];

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  dismissPlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audioRef.current = audio;

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
      });

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      audio.addEventListener("ended", () => {
        // Auto play next track
        handleNext();
      });

      audio.addEventListener("pause", () => {
        setIsPlaying(false);
      });

      audio.addEventListener("play", () => {
        setIsPlaying(true);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const playTrack = useCallback((track: Track) => {
    if (!audioRef.current) return;

    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      return;
    }

    setCurrentTrack(track);
    audioRef.current.src = track.src;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    audioRef.current.play().catch(console.error);
  }, [currentTrack, isPlaying]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (!currentTrack) {
      if (TRACK_LIST.length > 0) {
        playTrack(TRACK_LIST[0]);
      }
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
  }, [currentTrack, isPlaying, playTrack]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const setVolume = useCallback((vol: number) => {
    const clamped = Math.max(0, Math.min(1, vol));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  }, [isMuted]);

  const handleNext = useCallback(() => {
    if (!currentTrack) return;
    const currentIndex = TRACK_LIST.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % TRACK_LIST.length;
    playTrack(TRACK_LIST[nextIndex]);
  }, [currentTrack, playTrack]);

  const handlePrev = useCallback(() => {
    if (!currentTrack) return;
    const currentIndex = TRACK_LIST.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + TRACK_LIST.length) % TRACK_LIST.length;
    playTrack(TRACK_LIST[prevIndex]);
  }, [currentTrack, playTrack]);

  const dismissPlayer = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentTrack(null);
    setIsPlaying(false);
  }, []);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        playTrack,
        togglePlay,
        pause,
        seek,
        setVolume,
        toggleMute,
        nextTrack: handleNext,
        prevTrack: handlePrev,
        dismissPlayer,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
