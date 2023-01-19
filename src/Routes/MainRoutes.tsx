import { useRoutes } from "react-router-dom";
import { Countries } from "../pages/Countries";
import { CountryPage } from "../pages/CountryPage";

export const MainRoutes = () => {
  return useRoutes([
    { path: `/`, element: <Countries /> },
    { path: `/country/:code`, element: <CountryPage /> },
  ]);
};
