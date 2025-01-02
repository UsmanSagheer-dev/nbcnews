import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";

function Home() {
  return (
    <div className="h-auto" style={{ backgroundColor: "#f1f2f3" }}>
      <div>
        <Header />
      </div>
      <div className="mt-0 lg:mt-8">
        <HeroSection />
      </div>
    </div>
  );
}

export default Home;
