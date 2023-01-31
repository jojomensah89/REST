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
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    const lowerSearch = search.toLocaleLowerCase();

    const searchResult = countries.filter((country) =>
      country.name.toLowerCase().includes(lowerSearch)
    );
    const filterByRegion = countries.filter(
      (country) => country.region === regionFilter
    );

    const searchAfterFilter = filterByRegion.filter((country) =>
      country.name.toLowerCase().includes(lowerSearch)
    );

    if (regionFilter && lowerSearch) {
      setFilteredCountries(searchAfterFilter);
    } else if (regionFilter) {
      setFilteredCountries(filterByRegion);
    } else if (lowerSearch) {
      setFilteredCountries(searchResult);
    } else {
      setFilteredCountries(countries);
    }
  }, [search, regionFilter, countries]);

  const handleSearch = (term: string) => {
    setSearch(term);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleFilter = (region: string) => {
    setRegionFilter(region);
    setFilteredCountries(
      countries.filter((country) => country.region === region)
    );
  };

  const handleSearchAfterFilter = (term: string) => {
    setSearch(term);
    setFilteredCountries(
      filteredCountries.filter((country) =>
        country.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <main className={`${Styles.main} ${Styles[theme]}`}>
      <InputArea
        searchValue={search}
        regionValue={regionFilter}
        Search={setSearch}
        Filter={setRegionFilter}
        // FilterAndSearch={handleSearchAfterFilter}
      />
      <div className={Styles.countries}>
        {countries ? (
          filteredCountries.map((country, index) => (
            <CountryItem country={country} key={index} />
          ))
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </main>
  );
};
