import { BiSearch } from 'react-icons/bi';

const SearchInput = () => {
  return (
    <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:shadow-md transition-shadow duration-200 lg:w-[800px] md:w-[100%] sm:w-[100%] h-[54px] w-full bg-white">

      <BiSearch className="h-5 w-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Corona Virus Updates"
        className="border-none focus:outline-none text-sm text-gray-700 placeholder-gray-500  w-full"
      />
    </div>
  );
};

export default SearchInput;