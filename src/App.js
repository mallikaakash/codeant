import React from "react";
import "./index.css";
import MetricsCards from "./components/MetricsCard.jsx";
import SignInCard from "./components/SignInCard.jsx";

import { useState } from 'react';



// const repositories = [
//   {
//     name: "design-system",
//     language: "Public",
//     size: "7250 KB",
//     updated: "Updated 1 day ago",
//   },
//   {
//     name: "codeant-ci-app",
//     language: "Private",
//     size: "5671 KB",
//     updated: "Updated 2 days ago",
//   },
//   {
//     name: "analytics-dashboard",
//     language: "Private",
//     size: "4523 KB",
//     updated: "Updated 5 days ago",
//   },
//   {
//     name: "mobile-app",
//     language: "Public",
//     size: "3098 KB",
//     updated: "Updated 3 days ago",
//   },
//   {
//     name: "e-commerce-platform",
//     language: "Private",
//     size: "6235 KB",
//     updated: "Updated 6 days ago",
//   },
// ];

export default function App() {

  return (
    <div className="container min-w-full min-h-screen mx-auto flex flex-row">
      <div className="hidden sm:flex w-1/2 h-screen p-4 border-r border-gray-200 flex-col justify-center items-center">
        <MetricsCards />
      </div>

      <div className="w-full sm:w-1/2 h-screen p-4 flex items-center justify-center">
        <SignInCard />
        
      </div>
    </div>
  );
}
