import React from "react";
// import { PlusCircle } from 'lucide-react';
import "./index.css";

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
    <body className="container min-w-full min-h-screen mx-auto flex flex-row">
      <div className="w-1/2 h-screen p-4 border-r border-gray-200 flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg ">
          <div className="flex flex-row gap-4 items-center justify-center border-b border-gray-200 p-4">
            <img src="./assets/small_logo.png" alt="logo" />
            <h1 className="font-bold text-xl">
              {" "}
              AI to Detect & Autofix Bad code{" "}
            </h1>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center p-4">
            <div>
              <p className="font-bold"> 30+</p>
              <p>language Support</p>
            </div>
            <div>
              <p className="font-bold"> 10K+</p>
              <p>developers</p>
            </div>
            <div>
              <p className="font-bold"> 100K+</p>
              <p>Hours saved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen p-4 flex items-center justify-center">
        <div className="gap-4 flex flex-col items-center justify-center p-6 rounded-lg">
          <h1 className="font-bold text-3xl"> CodeAnt AI </h1>
          <h3 className="font-semibold text-xl"> welcome to CodeAnt AI </h3>
          <div className="flex flex-row gap-4">
            <button className="bg-blue-600 w-64 h-12 rounded-sm text mt-4">
              {" "}
              SAAS
            </button>
            <button className="w-64 h-12 mt-2"> Self Hosted</button>
          </div>
          <div></div>
        </div>
      </div>
    </body>
  );
}
