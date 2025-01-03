import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import Tabs from "../../components/tabs/Tabs";

function Home() {
  return (
    <div className="h-auto " >
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Hero Section */}
      <div className="mt-0 lg:mt-8">
        <HeroSection />
      </div>

      {/* Error Alert */}
      <div className="mt-0 lg:mt-8 mb-0">
        <ErrorAlert />
      </div>

      {/* Tabs Section */}
      <div className=" mt-[40px] sm:mt-8 mb-0">
        <Tabs />
      </div>
    </div>
  );
}

export default Home;
