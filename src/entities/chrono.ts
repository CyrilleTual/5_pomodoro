 

export interface State {
  session: {
    value: number;
    runningValue: number;
  };
  pause: {
    value: number;
    runningValue: number;
  };
  isPlaying: boolean;
  intervalId: number | undefined;
  cycles: number;
  displayedValue: {
    value: number;
    heading: string;
  };
    updateChronoValues : (type: "session" | "pause", sign: "+" | "-") => void;

    startChrono: () => void;

    tick: () => void;
    setupChrono: (payload: { intervalId: number }) => void;

}