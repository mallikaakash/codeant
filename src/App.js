import React from "react";
import "./index.css";
import MetricsCards from "./components/MetricsCard.jsx";
import SignInCard from "./components/SignInCard.jsx";
import logo from "./assets/logo.jpg";

import { useState } from 'react';




export default function App() {
  

  return (
    <div className="container min-w-full min-h-screen mx-auto flex flex-row">
      <div className="hidden sm:flex w-1/2 h-screen p-4 border-r border-gray-200 flex-col justify-center items-center">
      <img src={logo} alt="logo" />
        <MetricsCards />
      </div>

      <div className="w-full sm:w-1/2 h-screen flex items-center justify-center">
        <SignInCard />
        
      </div>
    </div>
  );
}
