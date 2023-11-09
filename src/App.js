import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          {/* home */}
          <Route
            exact
            path={'/'}
            element={<Home />}
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
