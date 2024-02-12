import { spawn } from "child_process";
import { Button } from "./ui/button";
import { Play, TimerReset } from "lucide-react";
import { useChrono } from "@/store/useChrono";

export default function ToggleButton({ action }: { action: string }) {

  const startChrono = useChrono((state: any) => state.startChrono);
  const isPlaying = useChrono((state: any) => state.isPlaying);
 
  return (
    <Button 
    onClick={() => startChrono()}
    className="bg-slate-400 text-slate-900 w-[150px] text-center hover:bg-slate-300 hover:scale-110">
      {action === "stopped" ? (
        <>
          {" "}
          Start <Play className="text-slate-800 ml-3" />
        </>
      ) : (
        <>
          Reset <TimerReset className="text-slate-800 ml-3" />
        </>
      )}
    </Button>
  );
}
