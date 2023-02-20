import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";

import "./style.css";

const BtnDarkMode = () => {
  //   const [darkMode, setDarkMode] = useState("light");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());
  //   const btnRef = useRef(null); //Привязка к элементам

  //Начальная установка + вызов при изменении
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      //   btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      //   btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };

  const normalBtn = "dark-mode-btn";
  const activeBtn = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      //   ref={btnRef}
      className={darkMode === "dark" ? activeBtn : normalBtn}
      onClick={() => toggleDarkMode()}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
