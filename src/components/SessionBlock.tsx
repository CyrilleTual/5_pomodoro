"use client";
import UpdateTimeButton from "@/components/UpdateTimeButton";
import { useChrono } from "@/store/useChrono";
 


////  updateChronoValues : (type: "session" | "pause", sign: "+" | "-")

export default function SessionBlock() {


  const session = useChrono((state:any) => state.session);
  const updateChrono = useChrono((state:any) => state.updateChronoValues);


  return (
    <div className="mr-10">
      <p className="flex justify-center  mb-1">Session</p>
      <div className="flex">
        <div onClick={() => updateChrono("session", "-")}>
          <UpdateTimeButton sign={"-"} type="session" />
        </div>
        <p className="mx-4 text-xl">{session.value / 60}</p>
        <div onClick={() => updateChrono("session", "+")}>
            <UpdateTimeButton sign={"+"} type="session" />
        </div>
      </div>
    </div>
  );
}
