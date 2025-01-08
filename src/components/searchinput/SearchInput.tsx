import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../redux/slice/searchSlice";
import { AppDispatch } from "../../redux/store"; 

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      dispatch(fetchSearchResults(query));
    }
  };
  return (
    <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:shadow-md transition-shadow duration-200 lg:w-[800px] md:w-[600px] sm:w-[400] h-[54px] w-[310px] bg-white">
      <BiSearch className="h-5 w-5 text-gray-500 mr-2" />
      <input
  type="text"
  placeholder="Search Results"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onKeyDown={handleKeyDown}
  className="border-none focus:outline-none text-sm text-gray-700 placeholder-gray-500 lg:w-[800] sm:w-[400] w-full placeholder:text-[15px] placeholder:font-ibm-plex placeholder:font-semibold placeholder-italic"
/>

    </div>
  );
};

export default SearchInput;
