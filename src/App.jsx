import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Main from "./pages/main";
import Application from "./pages/application";

//components
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;
