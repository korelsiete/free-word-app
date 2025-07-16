import { create } from "zustand";

const useTimeStore = create((set, get) => {
  let interval = null;

  return {
    duration: 10,
    timeLeft: 10,
    isRunning: false,
    finish: false,

    start: () => {
      const { isRunning, duration } = get();
      if (isRunning || interval) return;

      set({ isRunning: true, finish: false });

      interval = setInterval(() => {
        const { timeLeft } = get();

        if (timeLeft <= 1) {
          set({ timeLeft: duration, finish: true });
        } else {
          set((state) => ({ timeLeft: state.timeLeft - 1, finish: false }));
        }
      }, 1000);
    },

    stop: () => {
      clearInterval(interval);
      interval = null;
      set({ isRunning: false, finish: false });
    },

    restart: () => {
      get().stop();
      set({ timeLeft: get().duration });
    },

    setDuration: (newDuration) => {
      get().stop();
      set({ duration: newDuration, timeLeft: newDuration });
    },
  };
});

export default useTimeStore;
