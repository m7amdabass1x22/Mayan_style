import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About us" element={<AboutPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<h1>eror 404|page not found</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
