import React from "react";
import { Context } from "../Components/Context";

export const SetGetAPI = () => {
  const { data, setData } = React.useContext(Context);
  const getAPi = (api) => {
    api.then((response) => response.json()).then((result) => setData(result));
  };

  return { getAPi };
};
