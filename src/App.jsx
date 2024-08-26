import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("trending");

  return (
    <>
      <Navbar setKeyword={setKeyword} />
      <Body keyword={keyword} />
      <Footer />
    </>
  );
}

export default App;
