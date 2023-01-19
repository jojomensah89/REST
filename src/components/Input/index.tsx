import { InputTs } from "../../types/Input";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useState } from "react";
import Styles from "./styles.module.css";

export const InputArea = ({ value, Search }: InputTs) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className={Styles.InputArea}>
      <input
        type="text"
        className={`InputArea ${Styles[theme]}`}
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => Search(e.target.value)}
      />
      <select
        className={`${Styles[theme]}`}
        onChange={(e) => Search(e.target.value)}
        defaultValue={"Filter by region"}
      >
        <option
          value="Filter by region"
          disabled
          className={`${Styles[theme]} 
          `}
        >
          Filter by region
        </option>
        <option value="Africa" className={Styles[theme]}>
          Africa
        </option>
        <option value="Americas" className={Styles[theme]}>
          Americas
        </option>
        <option value="Asia" className={Styles[theme]}>
          Asia
        </option>
        <option value="Europe" className={Styles[theme]}>
          Europe
        </option>
        <option value="Oceania" className={Styles[theme]}>
          Oceania
        </option>
      </select>
      <div className={`${Styles.searchIcon} ${Styles[theme]}`}>
        <div className={`${Styles.IconTail} ${Styles[theme]}`}></div>
      </div>
    </section>
  );
};
