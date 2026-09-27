"use client";

import React from "react";
import { AudioProvider } from "../context/AudioContext";
import GlobalAudioBar from "./GlobalAudioBar";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AudioProvider>
      {children}
      <GlobalAudioBar />
    </AudioProvider>
  );
}
