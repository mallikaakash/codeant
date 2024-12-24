import React from "react";
import "./index.css";
import MetricsCards from "./components/MetricsCard.jsx";
import SignInCard from "./components/SignInCard.jsx";
import logo from "./assets/logo.jpg";

export default function App() {
  return (
    <div className="container min-w-full h-screen mx-auto flex flex-row overflow-hidden">
      <div className="hidden sm:flex w-1/2 h-screen p-4 border-r border-gray-200 flex-col justify-center items-center relative">
        <MetricsCards />
        <img 
          src={logo} 
          alt="logo" 
          className="absolute bottom-0 left-0 max-w-[240px]"
        />
      </div>

      <div className="w-full sm:w-1/2 h-screen flex items-center justify-center">
        <SignInCard />
      </div>
    </div>
  );
}
