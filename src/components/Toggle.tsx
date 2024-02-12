"use client"
import ToggleButton from "@/components/ToggleButton";
 import { useChrono } from "@/store/useChrono";

export default function Toggle() {

    const isPlaying = useChrono ((store)=> store.isPlaying); 


  return <ToggleButton action={isPlaying? 'playing': 'stopped'} />;
}
