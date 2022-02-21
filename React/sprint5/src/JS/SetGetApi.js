import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const SetGetApi = () => {
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);

  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const getAPI = (api) => {
    setLoading(true);
    api
      .then((response) => {
        return response.json();
        // console.log(response)
      })
      .then((r) => {
        setData(r);
        // console.log(r)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
        setError(null);
        // window.onload()
      });
  };

  const setAPI = (api) => {
    setLoading(true);
    api
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
        setError(null);
      });
    alert("User Registerd Successfully!");
    // window.location.reload();
    navigate("/");
  };

  return { getAPI, loading, setAPI, data, setData, error };
};
