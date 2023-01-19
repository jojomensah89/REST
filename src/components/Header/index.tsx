import { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContextProvider";
import Styles from "./styles.module.css";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={Styles[theme]}>
      <header className={`${Styles.header}`}>
        <h1>Where in the world?</h1>
        <p
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
            console.log(theme);
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
          <span>Dark Mode</span>
        </p>
      </header>
    </div>
  );
};
