import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useThemeStore } from "../stores/useThemeStore";

export default function ThemeToggle() {
  const isDark = useThemeStore((s) => s.mode === "dark");
  const toggle = useThemeStore((s) => s.toggle);

  return (
    <Switch
      checked={isDark}
      onChange={toggle}
      className="inline-flex h-8 w-16 items-center rounded-3xl transition bg-text/30"
    >
      <span className="size-6 p-1 translate-x-1 rounded-full transition text-white bg-gray-800 dark:translate-x-9">
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </Switch>
  );
}
