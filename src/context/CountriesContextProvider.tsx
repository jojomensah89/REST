import React, { ReactNode } from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { Country } from "../types/Country";

type childrenType = {
  children: React.ReactNode;
};

export const AllCountriesData = createContext<Country[]>([]);

export function CountriesContext({ children }: childrenType) {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    api
      .getCountries()
      .then((result) => {
        setCountries(result);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <AllCountriesData.Provider value={countries}>
      {children as ReactNode}
    </AllCountriesData.Provider>
  );
}
