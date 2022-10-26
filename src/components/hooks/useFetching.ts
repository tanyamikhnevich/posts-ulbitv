import {useState } from "react";

type UseFetchingT = [() => Promise<void>, boolean, string]


export const useFetching = (callback: () => void): UseFetchingT => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e: any) {
      setError(e.message )
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error]
};