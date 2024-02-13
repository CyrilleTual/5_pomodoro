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
  isPaused: false,
  intervalId: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "waiting",
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

  ////  startChrono : () => void;
  startChrono: () => {
    const isRunning = (get() as any).isPlaying;

    if (!isRunning) {
      const intervalId = setInterval(() => {
        set((state: State) => ({
          isPlaying: true,
          displayedValue: {
            value: +state.displayedValue.value - 1,
            heading: "work",
          },
        }));
        if ((get() as any).displayedValue.value === 0) {
          clearInterval(intervalId);
          const state = get() as State;

          set((state: State) => ({
            cycles: state.cycles + 1,
            isPlaying: false,
            displayedValue: {
              value: state.session.value,
              heading: "waiting",
              isRunning: false,
            },
            isPaused: true,
          }));
          state.startPause();
        }
      }, 1000);
      set(() => ({ intervalId: intervalId }));
      set((state: State) => ({
        isPlaying: true,
        displayedValue: { value: state.session.value, heading: "work" },
      }));
    }
  },

  ////  startPause : () => void;
  startPause: () => {
    const intervalId = setInterval(() => {
      set((state: State) => ({
        displayedValue: {
          value: +state.displayedValue.value - 1,
          heading: "paused",
        },
        isPaused: true,
      }));
      const state = get() as State;

      /// fin de la pause
      if ((get() as any).displayedValue.value === 0) {
        clearInterval(intervalId);
        const state = get() as State;

        set((state: State) => ({
          isPlaying: false,
          displayedValue: {
            value: state.session.value,
            heading: "waiting",
            isRunning: false,
          },
        }));
        state.startChrono();
      }
    }, 1000);
    set(() => ({ intervalId: intervalId }));
    set((state: State) => ({
      displayedValue: {
        value: state.pause.value,
        heading: "paused",
      },
      isPaused: true,
    }));
  },

  resetChrono: () => {
    const {intervalId} = get() as State;
    if (intervalId) {
      clearInterval(intervalId);
      set((state: State) => ({
        isPlaying: false,
        isPaused: false,
        cycles: 0,
        displayedValue: { value: state.session.value, heading: "waiting" },
      }));
    }
  },



}));
