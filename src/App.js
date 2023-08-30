import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

