import { useState, useEffect, useCallback } from "react";

const useFetchDetails = (url) => {
  const [element, setElement] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setElement(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return { element, isLoading, error };
};

export default useFetchDetails;
