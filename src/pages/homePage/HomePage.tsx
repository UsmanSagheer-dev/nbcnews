import Carousel from "../../components/customNavigationCarousal/CustomNavigationCarousal";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import HeroSection from "../../components/heroSection/HeroSection";
import Tabs from "../../components/tabs/Tabs";
function Home() {
  return (
    <div className="h-auto max-w-[1920px] w-full justify-center grid grid-cols-1 items-center">
      <div className="mt-0 lg:mt-8 flex justify-center items-center max-w-[1920px] w-full">
        <HeroSection />
      </div>
      <div className="mt-0 lg:mt-8 mb-0 max-w-[1920px] w-full flex justify-center items-center">
        <ErrorAlert />
      </div>
      <div className="mt-0 lg:mt-[40px] max-w-[1920px] w-full flex justify-center items-center">
        <Tabs />
      </div>
      <div className="max-w-[1920px] w-full">
        <Carousel />
      </div>
    </div>
  );
}

export default Home;