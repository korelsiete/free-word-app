import { useEffect } from "react";
import { useThemeStore } from "../stores/useThemeStore";

export default function useThemeSync() {
  const mode = useThemeStore((s) => s.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);
}
