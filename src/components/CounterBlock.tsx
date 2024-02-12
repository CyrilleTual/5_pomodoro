"use client";
import { useChrono } from "@/store/useChrono";
import { useState } from "react";
import { useEffect } from "react";

export default function CounterBlock() {
  const displayedValue = useChrono((store: any) => store.displayedValue);
  const cycles = useChrono((store: any) => store.cycles);

  const [min, setMin] = useState(Math.floor(displayedValue.value / 60));
  const [sec, setSec] = useState(displayedValue.value % 60);

  useEffect(() => {
    console.log("displayedValue", displayedValue);
    setMin(Math.floor(displayedValue.value / 60));
    setSec(displayedValue.value % 60);
  }, [displayedValue]);

  console.log("displayedValue", displayedValue);

  return (
(
      <>
        <p className="text-center mb-2 text-xl font-s">
          {displayedValue.heading}
        </p>
        <p className="text-center flex justify-center mb-1">
          <span className="text-4xl p-4 rounded bg-slate-300 text-slate-900">
            {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
          </span>
        </p>
        <p className="text-center mb-10 ">Past cycle(s): {cycles}</p>
      </>
    )
  );
}
