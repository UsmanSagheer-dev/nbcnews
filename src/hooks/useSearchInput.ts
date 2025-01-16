import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../redux/slice/searchSlice";
import { AppDispatch } from "../redux/store";

const useSearchInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      dispatch(fetchSearchResults(query));
    }
  };

  return {
    query,
    setQuery,
    handleKeyDown,
  };
};

export default useSearchInput;
