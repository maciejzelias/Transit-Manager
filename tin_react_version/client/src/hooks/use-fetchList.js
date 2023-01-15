import { useState, useEffect, useCallback } from 'react';

const useFetchList = (url) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchList = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setList(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return { list, isLoading, error };
};

export default useFetchList;
