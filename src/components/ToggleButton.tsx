'use client'

import { Button } from "./ui/button";
import { Play, TimerReset } from "lucide-react";
import { useChrono } from "@/store/useChrono";
import { useEffect, useState } from "react";

export default function ToggleButton({ action }: { action: string }) {

  const startChrono = useChrono((state: any) => state.startChrono);
  const resetChrono = useChrono((state: any) => state.resetChrono);
  const isPlayingState = useChrono((state: any) => state.isPlaying);
  const isPausedState = useChrono((state: any) => state.isPaused);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsPlaying(isPlayingState);
    setIsPaused(isPausedState);
  }, [isPlayingState, isPausedState]);

 
 
  return (
    <Button
      onClick={() => (isPlaying || isPaused ? resetChrono : startChrono)()}
      className="bg-slate-400 text-slate-900 w-[150px] text-center hover:bg-slate-300 hover:scale-110"
    >
      {isPlaying || isPaused ? (
        <>
          {" "}
          Reset <TimerReset className="text-slate-800 ml-3" />
        </>
      ) : (
        <>
          Start <Play  className="text-slate-800 ml-3" />
        </>
      )}
    </Button>
  );
}
