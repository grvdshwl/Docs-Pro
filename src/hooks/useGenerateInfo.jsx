import { useState, useCallback } from "react";
import { fetchChatCompletion } from "../utils/prompt";

export const useGenerateInfo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateInfo = useCallback(async (text) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchChatCompletion(text);
      return result;
    } catch (err) {
      setError(err.message || "Failed to generate information.");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { generateInfo, loading, error };
};
