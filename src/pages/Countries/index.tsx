import { useContext, useEffect, useState } from "react";
import { InputArea } from "../../components/Input";
import { AllCountriesData } from "../../context/CountriesContextProvider";
import { CountryItem } from "../../components/CountryItem";
import { Country } from "../../types/Country";
import Styles from "./styles.module.css";
import { ThemeContext } from "../../context/ThemeContextProvider";

export const Countries = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const countries = useContext(AllCountriesData);
  const [filtredCountries, setFiltredCountries] =
    useState<Country[]>(countries);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchResult = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(lowerSearch) ||
        country.region.toLowerCase().includes(lowerSearch)
    );
    setFiltredCountries(searchResult);
  }, [search, countries]);

  const lowerSearch = search.toLocaleLowerCase();

  return (
    <main className={`${Styles.main} ${Styles[theme]}`}>
      <InputArea value={search} Search={setSearch} />
      <div className={Styles.countries}>
        {countries ? (
          filtredCountries.map((country, index) => (
            <CountryItem country={country} key={index} />
          ))
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </main>
  );
};
