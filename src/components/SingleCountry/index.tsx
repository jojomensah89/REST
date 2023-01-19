import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Country } from "../../types/Country";
import { AllCountriesData } from "../../context/CountriesContextProvider";
import Styles from "./styles.module.css";
import { ThemeContext } from "../../context/ThemeContextProvider";

export interface SingleCountryProps {
  country: Country;
}

export const SingleCountry: FC<SingleCountryProps> = (props) => {
  const countries = useContext(AllCountriesData);
  const { theme, setTheme } = useContext(ThemeContext);
  const getNameByCode = (code: string): string => {
    let name = "";
    if (countries) {
      name = countries.find((c) => c.alpha3Code === code)?.name ?? "";
    }
    return name;
  };

  return (
    <div className={` ${Styles.SingleCountry} ${Styles[theme]}`}>
      <img
        src={props.country.flags.png}
        alt={`country Name : ${props.country.name}`}
      />

      <div className={Styles.countryData}>
        <h1>{props.country.name}</h1>
        <div className={Styles.dataArea}>
          <div>
            <p>
              <span>Native Name : </span>
              {props.country.nativeName}
            </p>
            <p>
              <span>Population : </span>
              {props.country.population.toLocaleString("en")}
            </p>
            <p>
              <span>Region : </span>
              {props.country.region}
            </p>
            <p>
              <span>Subregion : </span>
              {props.country.subregion}
            </p>
            {props.country.capital && (
              <p>
                <span>Capital : </span>
                {props.country.capital}
              </p>
            )}
          </div>
          <div>
            <p className={Styles.topLevel}>
              <span>Top Level Dmain : </span>
              {props.country.topLevelDomain}
            </p>
            {props.country.currencies && (
              <p>
                <span>Currencie : </span>
                {props.country.currencies.map((item) => item.name)}
              </p>
            )}
            <p>
              <span>Languages :</span>
              {props.country.languages.map((item, index) => (
                <span key={index} className={Styles.language}>
                  {` ${item.name}`}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className={Styles.borderArea}>
          <p>Border Countries :</p>
          <div className={`${Styles.borders} ${Styles[theme]}`}>
            {props.country.borders &&
              props.country.borders.map((borderCode, index) => (
                <Link
                  to={`/country/${borderCode}`}
                  key={index}
                  className={Styles.singleBorder}
                >
                  <span className={Styles[theme]}>
                    {getNameByCode(borderCode)}{" "}
                  </span>{" "}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
