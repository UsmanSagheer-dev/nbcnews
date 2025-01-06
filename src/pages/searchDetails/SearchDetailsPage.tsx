import CardSection from "../../components/cardSection/CardSection";
import NewsHeader from "../../components/newsheading/NewsHeading";
import SearchInput from "../../components/searchinput/SearchInput";
import Footer from "../../components/footer/Footer";
function SearchDetailsPage() {
  return (
    <div className="bg-[#f1f2f3]">
      <div className="container mx-auto flex items-center justify-center  bg-[#f1f2f3]">
        <div className="flex flex-col items-center justify-center mt-[253px] lg:gap-[64px] gap-5">
          <div>
            <NewsHeader />
          </div>
          <div className=" w-full">
            <SearchInput />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-[263px] ">
        <div className="container bg-white lg:w-[1290px] w-full h-[54px] flex items-center justify-start px-[15px]">
          <h1 className="text-[18px] font-semibold">Search Results</h1>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <CardSection/>
      </div>
      <div className="bg-[#0E1E32]">
        <Footer/>
      </div>
    </div>
  );
}

export default SearchDetailsPage;
