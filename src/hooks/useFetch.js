/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
const useFetch = ({ api, unique }) => {
  const [items, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetchData, setRefetchData] = useState(false);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = unique
    ? `${process.env.REACT_APP_API_URL}/${api}/${unique}`
    : `${process.env.REACT_APP_API_URL}/${api}`;

  useEffect(() => {
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        setData(data);
      });
  }, [refetchData]);
  const refetch = () => setRefetchData((prevState) => !prevState);
  return [items, loading, refetch];
};

export default useFetch;
