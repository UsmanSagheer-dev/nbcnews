import CardSection from "../../components/cardSection/CardSection";

import Carousel from "../../components/customNavigationCarousal/CustomNavigationCarousal";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import Tabs from "../../components/tabs/Tabs";

function Home() {
  return (
    <div className="h-auto max-w-[1920px] w-full justify-center grid grid-cols-1 items-center">
      {/* Header */}
      <div className="max-w-[1920px] w-full">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="mt-0 lg:mt-8 flex justify-center items-center max-w-[1920px] w-full">
        <HeroSection />
      </div>

      {/* Error Alert */}
      <div className="mt-0 lg:mt-8 mb-0 max-w-[1920px] w-full flex justify-center items-center">
        <ErrorAlert />
      </div>

      {/* Tabs Section */}
      <div className="mt-0 lg:mt-[40px] max-w-[1920px] w-full flex justify-center items-center">
        <Tabs />
      </div>
      <div className="max-w-[1920px] w-full flex justify-center items-center">
        <CardSection />
      </div>
      <div className="max-w-[1920px] w-full flex justify-center items-center ">
        <Carousel />
      </div>
      <div className="w-full h-full max-w-[1920px] sm:mt-8  bg-[#0E1E32] flex  items-center">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
