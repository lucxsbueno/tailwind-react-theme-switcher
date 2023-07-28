import { useMemo } from "react";

import useLocalStorage from "use-local-storage";

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const documentElement = document.documentElement;
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useMemo(() => {
    if (theme === "dark" || (!!theme && prefersDarkScheme)) {
      documentElement.classList.add("dark");
    } else {
      documentElement.classList.remove("dark");
    }

    switch (theme) {
      case "dark":
        documentElement.classList.add("dark");
        break;
      case "light":
        documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme, documentElement.classList, prefersDarkScheme]);

  return { theme, setTheme, prefersDarkScheme };
}

export default useTheme;