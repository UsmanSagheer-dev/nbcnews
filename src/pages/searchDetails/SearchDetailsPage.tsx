import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NewsHeader from "../../components/newsheading/NewsHeading";
import SearchInput from "../../components/searchinput/SearchInput";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

function SearchDetailsPage() {
  const { searchResults, isLoading, isError } = useSelector(
    (state: RootState) => state.search
  );

  console.log("Loading: ", isLoading);
  console.log("Error: ", isError);
  console.log("Search Results: ", searchResults);

  return (
    <div className="bg-[#f1f2f3]">
      <div className="container mx-auto flex items-center justify-center bg-[#f1f2f3]">
        <div className="flex flex-col items-center justify-center mt-[253px] lg:gap-[64px] gap-5">
          <div>
            <NewsHeader />
          </div>
          <div className="w-full overflow-hidden">
            <SearchInput />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[263px]">
        <div className="container bg-white lg:w-[1290px] w-full h-[54px] flex items-center justify-start px-[15px]">
          <h1 className="text-[18px] font-semibold">Search Results</h1>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center flex-wrap gap-4 mt-5">
        {isLoading ? (
          <div>
            <Loader />
          </div>
        ) : isError ? (
          <p className="text-red-500">{isError}</p>
        ) : searchResults && searchResults.length > 0 ? (
          searchResults.map((result) => {
            const imageUrl = result.multimedia[0]?.url || "default-image.jpg";
            console.log("Image URL: ", imageUrl);
            return (
              <Card
                key={result._id}
                cardimg={imageUrl}
                title={result.headline.main}
                description={result.abstract}
                author={result.byline.original}
                time={new Date(result.pub_date).toLocaleDateString()}
                readTime="5 min read"
              />
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </div>

      <div className="bg-[#0E1E32]">
        <Footer />
      </div>
    </div>
  );
}

export default SearchDetailsPage;
