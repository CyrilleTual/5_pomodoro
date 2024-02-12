import { State } from "@/entities/chrono";
import { create } from "zustand";

const initialState: Partial<State> = {
  session: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalId: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "work",
  },
};

//////  set du store //////
export const useChrono = create((set, get) => ({
  ...initialState,

  // manage the chrono values increase or decrease
  updateChronoValues: (type: "session" | "pause", sign: "+" | "-") => {
    set((state: any) => {
      const chrono = state[type];
      const newValue = sign === "+" ? chrono.value + 60 : chrono.value - 60;

      //// stop if value is 0
      if (newValue <= 0) return state;

      /// for session duration management
      if (type === "session") {
        if (!state.isPlaying) {
          return {
            [type]: {
              ...chrono,
              value: newValue,
              runningValue: newValue,
            },
            displayedValue: {
              value: newValue,
              heading: type,
            },
          };
        } else {
          return {
            [type]: {
              ...chrono,
              value: newValue,
            },
          };
        }
      }

      /// for pause duration management
      if (type === "pause") {
        return {
          [type]: {
            ...chrono,
            value: newValue,
          },
        };
      }
    });
  },

  ///
  //   tick: () => set((state: State) => ({ isPlaying: true })),

  //   setupChrono: (payload: { intervalId: number }) =>
  //     set((state: State) => ({
  //       isPlaying: true,
  //       intervalId: payload.intervalId,
  //     })),

  startChrono: () => {
    const isRunning = (get() as any).isPlaying;
    if (!isRunning) {
      const intervalId = setInterval(() => {
        set((state: State) => ({
          isPlaying: true,
          displayedValue: { value: +state.displayedValue.value - 60 },
        }));
        if((get()as any).displayedValue.value === 0){
          clearInterval(intervalId);
        }
      }, 1000);
      set((state: State) => ({ ...state, intervalId: intervalId }));
      set((state: State) => ({ ...state, isPlaying: true }));
    }
  },





}));
