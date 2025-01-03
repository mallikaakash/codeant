import React from "react";
import "./index.css";
import MetricsCards from "./components/MetricsCard.jsx";
import SignInCard from "./components/SignInCard.jsx";
import logo from "./assets/logo.jpg";
import { BiRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

{/* <App /> is the main component that renders the MetricsCards and SignInCard components. */
/* The MetricsCards component displays two cards: a larger card and a smaller overlapping card. */
/* The SignInCard component displays a form with two tabs: SaaS and Self-Hosted. */
/* The user can switch between the tabs to sign in with different services. */
/* The user can also navigate to the RepositoriesPage by clicking on the "To Repo Page" button. */
/* The Company logo is displayed on the left hand side of the page. */
}

export default function App() {
  const navigate = useNavigate();

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

      <div className="cursor-pointer absolute bottom-0 right-0 p-4 flex flex-row items-end justify-center gap-2 group " onClick={() => navigate('/repositories')}>
        <button 
          
          className="text-gray-600 group-hover:text-gray-800 transition-all duration-200"
        >
          To Repo Page  
        </button>
        <BiRightArrow size={20} className="text-gray-600 group-hover:text-gray-800 transition-all duration-200"/>
      </div>
    </div>
  );
}
