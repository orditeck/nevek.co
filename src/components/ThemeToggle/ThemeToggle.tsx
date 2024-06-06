import { useState } from "react";
import { getThemePreference } from "./get-theme-preference";

import '@fontsource/noto-emoji';
import styles from './ThemeToggle.module.scss'

export default function ModeToggle() {
  let theme = getThemePreference();
  document.documentElement.dataset.theme = theme;
  const [localTheme, setLocalTheme] = useState(theme);

  if (typeof localStorage !== "undefined") {
    const observer = new MutationObserver(() => {
      theme = document.documentElement.dataset.theme || 'light';
      localStorage.setItem("theme", theme);
      setLocalTheme(theme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }

  const toggle = () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  };

  return (
    <a onClick={toggle} className={styles.link}>
      {localTheme === "dark" ? "🌞" : "🌚"}
    </a>
  );
}
