import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NewsHeader from "../../components/newsheading/NewsHeading";
import SearchInput from "../../components/searchinput/SearchInput";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { IMAGES } from "../../constants/images";
function SearchDetailsPage() {
  const { searchResults, isLoading, isError } = useSelector(
    (state: RootState) => state.search
  );
  return (
    <div className="bg-[#f1f2f3]  h-full pb-5">
      <div className="container mx-auto flex items-center justify-center bg-[#f1f2f3]">
        <div className="flex flex-col items-center justify-center mt-[120px] lg:gap-[10px] gap-2">
          <div>
            <NewsHeader />
          </div>
          <div className="w-full overflow-hidden">
            <SearchInput />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[100px]">
        <div className="container bg-white lg:w-[1290px] w-full h-[54px] flex items-center justify-start px-[15px]">
          <h1 className="text-[18px] font-semibold">Search Results</h1>
        </div>
      </div>
      <div className="container w-full mx-auto lg:w-[1300px] mt-5 flex flex-col justify-center items-center">
        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : isError ? (
          <p className="text-red-500">{isError}</p>
        ) : searchResults && searchResults.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {searchResults.map((result) => {
              const imageUrl = result.multimedia[0]?.url || IMAGES.NEWS_IMAGE;
              const limitedDescription =
                result.abstract.split(" ").slice(0, 20).join(" ") +
                (result.abstract.split(" ").length > 20 ? "..." : "");

              return (
                <div className="" key={result._id}>
                  <Card
                    cardimg={imageUrl}
                    title={result.headline.main}
                    description={limitedDescription}
                    author={result.byline.original}
                    time={new Date(result.pub_date).toLocaleDateString()}
                    readTime="5 min read"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchDetailsPage;
