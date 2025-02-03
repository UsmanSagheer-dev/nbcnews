import { useState } from "react";
import { useAppDispatch } from "../redux/store";  
import { fetchSearchResults } from "../redux/slice/searchSlice";

const useSearchInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();  

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
