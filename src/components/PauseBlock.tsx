"use client";
import UpdateTimeButton from "@/components/UpdateTimeButton";
import { useChrono } from "@/store/useChrono";


export default function PauseBlock() {
  const pause = useChrono((state:any) => state.pause);
    const updateChrono = useChrono((state: any) => state.updateChronoValues);

  return (
    <div>
      <p className="flex justify-center mb-1">Pause</p>
      <div className="flex">
        <div onClick={() => updateChrono("pause", "-")}>
          <UpdateTimeButton sign={"-"} type="pause" />
        </div>
        <p className="mx-4 text-xl">{pause.value / 60}</p>
        <div onClick={() => updateChrono("pause", "+")}>
          <UpdateTimeButton sign={"+"} type="pause" />
        </div>
      </div>
    </div>
  );
}