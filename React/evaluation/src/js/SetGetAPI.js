import React from "react";
import { Context } from "../component/Context";

export const SetGetAPI = () => {
  const { setSinglePostData } = React.useContext(Context);
  const getAPi = (api, setPostData) => {
    api
      .then((response) => response.json())
      .then((result) => setPostData(result));
  };

  const getAPiSingle = (api) => {
    api
      .then((response) => response.json())
      .then((result) => setSinglePostData(result));
  };

  return { getAPi, getAPiSingle };
};
