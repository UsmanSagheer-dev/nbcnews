import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // Correct path
import Header from "./components/header/Header";
import Navigation from "./navigation/Navigation";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Navigation />
            <h1>asdf</h1>
          </main>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
