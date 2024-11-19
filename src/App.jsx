import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Section2 from "./components/Section_2/Section2";

function App() {
  return (
    <>
      <Navbar />
      <Section />
      <Section2 />
    </>
  );
}

export default App;
