import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/footer";
import About from "./components/About";
import Term from "./components/Term";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/term" element={<Term />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(<Main></Main>);

if (module.hot) {
  module.hot.accept();
}
