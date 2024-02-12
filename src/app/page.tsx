import SessionBlock from "@/components/SessionBlock";
import PauseBlock from "@/components/PauseBlock";
import CounterBlock from "@/components/CounterBlock";
import Toggle from "@/components/Toggle";
 

export default function Home() {
  return (
    <main>
      <h1>main page </h1>
      <div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
        <div className="text-center max-w-xl mx-auto border border-slate-500 rounded p-10 ">
          <h1 className="text-center text-3xl mb-8">Pomodoro App</h1>
          <div className="flex justify-center mb-8">
            {/* Session block */}
            <SessionBlock />
            {/* Pause block */}
            <PauseBlock />
          </div>
          {/* counter block */}
          <CounterBlock />
          {/* toggle button */}
          <Toggle/>
    
        </div>
      </div>
    </main>
  );
}
