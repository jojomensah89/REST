import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
// import { Country } from "../../types/Country";
import { Country } from "../../types/Country";
import { SingleCountry } from "../../components/SingleCountry";
import { AllCountriesData } from "../../context/CountriesContextProvider";
import { ThemeContext } from "../../context/ThemeContextProvider";
import Styles from "./styles.module.css";

export const CountryPage = () => {
  const { code } = useParams();

  const [country, setCountry] = useState<Country>();
  const { theme, setTheme } = useContext(ThemeContext);
  const countries = useContext(AllCountriesData);
  useEffect(() => {
    const ctxCountry = countries.find((c) => c.alpha3Code === code);
    if (ctxCountry) {
      setCountry(ctxCountry);
    }
  }, [code, countries]);

  return (
    <div className={`${Styles.CountryPage} ${Styles[theme]}`}>
      <Link to="/" className={`${Styles.back} ${Styles[theme]}`}>
        <span className={`${Styles.arrowHead} ${Styles[theme]}`}>{`<`}</span>
        <span className={`${Styles.arrowTail} ${Styles[theme]}`}></span>
        <span className={`${Styles.backText} ${Styles[theme]}`}>Back</span>
      </Link>
      {country ? (
        <SingleCountry country={country} />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
