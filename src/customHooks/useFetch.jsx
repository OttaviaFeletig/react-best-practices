import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoading(false);
          setError(error);
        }
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
