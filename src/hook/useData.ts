import { useEffect, useState } from 'react';
import { Pokemon } from '../pokemons';
import req from '../utils/requests';

interface ResponseData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Pokemon[];
}

interface UseDataResult {
  data: ResponseData | null;
  isLoading: boolean;
  isError: boolean;
}

const useData = (endpoint: string): UseDataResult => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint);

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;