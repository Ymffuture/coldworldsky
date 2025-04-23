import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("has-background-black", "has-text-white");
      root.classList.remove("has-background-white", "has-text-black");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("has-background-black", "has-text-white");
      root.classList.add("has-background-white", "has-text-black");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className={`button is-rounded is-small ${dark ? "is-light" : "is-dark"}`}
      onClick={() => setDark(!dark)}
      title="Toggle Theme"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
