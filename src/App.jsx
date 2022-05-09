import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"></div>; */}
        <Route path="/" element={<Top />} />
        <Route path="search" element={<Search />} />
        <Route path="watch" element={<Watch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
