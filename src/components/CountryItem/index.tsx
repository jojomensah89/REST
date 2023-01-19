import { Link } from "react-router-dom";
import { Country } from "../../types/Country";
import { FC } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";
import Styles from "./styles.module.css";

export interface CountryItemProps {
  country: Country;
}

export const CountryItem: FC<CountryItemProps> = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${Styles.countryItem}  ${Styles[theme]}`}>
      <Link
        to={`/country/${props.country.alpha3Code}`}
        className={Styles[theme]}
      >
        <div className={Styles.imgArea}>
          <img
            src={props.country.flags.png}
            alt="Bandeira do Pais"
            className="img"
          />
        </div>
        <div className={Styles.countryData}>
          <div className={Styles.countryName}>{props.country.name}</div>
          <p>
            Population :
            <span> {props.country.population.toLocaleString("en")} </span>
          </p>
          <p>
            Region :<span> {props.country.region}</span>
          </p>
          <p>
            Capital :<span> {props.country.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};
