import { useContext, useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContextProvider";
import Styles from "./styles.module.css";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={Styles[theme]}>
      <header className={`${Styles.header}`}>
        <div className={`${Styles.heading}`}>
          <h1>Where in the world ?</h1>
        </div>
        <div
          className={`${Styles.theme_switcher}`}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <p className={`${Styles.themeIcon}`}>
            <span className={Styles[theme]}>
              {theme === "light" ? (
                <i className="far fa-moon"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </span>
          </p>
          <p>Dark Mode</p>
        </div>
      </header>
    </div>
  );
};
