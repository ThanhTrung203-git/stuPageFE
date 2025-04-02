import React from "react";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GioiThieu from "./pages/GioiThieu";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gioi-thieu" element={<GioiThieu/>} />
        <Route path="/bieu-do-giang-day-va-hoc-tap" element={<div>bieu do giang day</div>} />
        <Route path="/cam-nang" element={<div>cam nang</div>} />
        <Route path="/chuong-trinh-dao-tao" element={<div>chuong trinh dao tao</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
