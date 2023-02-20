import FindPage from "./pages/FindPage";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendingPage from "./pages/TrendingPage";
import HomePage from "./pages/HomePage";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="app">
      
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Trending" element={<TrendingPage />} />
          <Route path="/Find" element={<FindPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
