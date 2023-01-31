import { InputTs } from "../../types/Input";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useState } from "react";
import Styles from "./styles.module.css";

export const InputArea = ({
  searchValue,
  regionValue,
  Search,
  Filter,
}: // FilterAndSearch,
InputTs) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className={Styles.InputArea}>
      <div className={`${Styles.inputfield} ${Styles[theme]}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className={` ${Styles[theme]} ${Styles.search}`}
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) =>
            // regionValue
            //   ? FilterAndSearch(e.target.value)
            Search(e.target.value)
          }
        />
      </div>

      <div className={`${Styles.filterfield} ${Styles[theme]}`}>
        <select
          className={`${Styles[theme]} ${Styles.filter}`}
          onChange={(e) => Filter(e.target.value)}
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
      </div>
    </section>
  );
};
