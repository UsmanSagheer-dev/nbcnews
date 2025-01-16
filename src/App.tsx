import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; 
import Header from "./components/header/Header";
import Navigation from "./navigation/Navigation";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Navigation />
          </main>
          <div className="w-full h-full max-w-[1920px]   bg-[#0E1E32] flex  items-center">
        <Footer />
      </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
