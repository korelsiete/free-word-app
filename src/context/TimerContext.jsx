import { createContext, useContext, useState, useEffect } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [duration, setDuration] = useState(10); // Duración configurada
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [newDuration, setNewDuration] = useState(duration); // Valor temporal

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      setTimeLeft(duration); // Reinicia automáticamente
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isRunning, duration]);

  function stopTimer() {
    setIsRunning(false);
    setTimeLeft(duration);
  }

  function startTimer() {
    setIsRunning(true);
  }

  return (
    <TimerContext.Provider
      value={{
        duration,
        timeLeft,
        isRunning,
        newDuration,
        setDuration,
        setTimeLeft,
        setIsRunning,
        setNewDuration,
        stopTimer,
        startTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export function useTimer() {
  return useContext(TimerContext);
}
