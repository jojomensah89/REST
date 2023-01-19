import axios from "axios";
import { Country } from "./types/Country";

const http = axios.create({
  baseURL: "https://restcountries.com/v2",
});

export const api = {
  getCountries: async (): Promise<Country[]> => {
    let response = await http.get<Country[]>("/all");
    return response.data;
  },
};
