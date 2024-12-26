import React from "react";
import "../index.css";
import MetricsCards from "../components/MetricsCard.jsx";
import SignInCard from "../components/SignInCard.jsx";
import logo from "../assets/logo.jpg";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "../components/Hamburger.jsx";
import {
  Book,
  ChevronDown,
  Cloud,
  HomeIcon,
  Phone,
  PlusIcon,
  RecycleIcon,
  RefreshCcw,
  Search,
  Settings,
} from "lucide-react";
import { GoDatabase } from "react-icons/go";
import dark_logo from "../assets/dark_logo.jpg";

import { useState } from "react";
import { MdFiberManualRecord } from "react-icons/md";
import { BsRecord } from "react-icons/bs";
import { Octokit } from "octokit";
import { BiExit } from "react-icons/bi";

{
  /*------------------------------------CAN BE IGNORED------------------------------------*/
}
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});
{
  /* Tried to make use of the Github API in order to fetch the my repositories*/
  /* The code is working fine and fetching the repositories */
  /* But the code is not used in the final code. there can be ignored*/
}

console.log(octokit);

const fetchRepos = async () => {
  const response = await octokit.request("GET /users/mallikaakash/repos", {
    username: "mallikaakash",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log(response.data.map((repo) => repo.full_name.split("/")[1]));
};

fetchRepos();

{
  /*------------------------------------RepositoriesPage------------------------------------*/
}

const peopleList = [
  "Ashokan Suresh Dhinagaran ",
  "Abhishek Choudhary",
  "E Sai Surya Abhinaya",
  "Aakash Debraj Mallik",
];

const repositories = [
  {
    id: 1,
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: 7320,
    lastUpdated: "1 day ago",
    contributors: [{ name: "G", color: "bg-blue-500", img: "" }],
  },
  {
    id: 2,
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: 5871,
    lastUpdated: "2 days ago",
    contributors: [{ name: "Suraj Soren", color: "bg-red-500", img: "" }],
  },
  {
    id: 3,
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: 4521,
    lastUpdated: "5 days ago",
    contributors: [
      { name: "V", color: "bg-green-500", img: "" },
      { name: "S", color: "bg-orange-500", img: "" },
    ],
  },
  {
    id: 4,
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: 3096,
    lastUpdated: "3 days ago",
    contributors: [{ name: "A", color: "bg-purple-500", img: "" }],
  },
  {
    id: 5,
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: 6210,
    lastUpdated: "6 days ago",
    contributors: [{ name: "S", color: "bg-orange-500", img: "" }],
  },
  {
    id: 6,
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: 1876,
    lastUpdated: "4 days ago",
    contributors: [],
  },
  {
    id: 7,
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: 5432,
    lastUpdated: "7 days ago",
    contributors: [],
  },
];

const sideBarItems = [
  {
    name: "Repositories",
    icon: <HomeIcon />,
  },
  {
    name: "AI Code Review",
    icon: <IoCodeSlashOutline />,
  },
  {
    name: "Cloud Security",
    icon: <Cloud />,
  },
  {
    name: "How to Use",
    icon: <Book />,
  },
  {
    name: "Settings",
    icon: <Settings />,
  },
];

export default function RepositoriesPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-row bg-gray-50 overflow-x-hidden">
      {/* Sidebar */}
      <div className="hidden sm:block fixed w-64 h-screen border-r border-gray-200 bg-white">
        <div className="p-6 flex flex-col h-full">
          {/* Logo and Dropdown */}
          <div className="mb-2">
            <div className="flex items-center mb-4">
              <img src={dark_logo} alt="logo" className="w-6 h-6" />
              <h1 className="text-2xl font-bold">CodeAnt AI</h1>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between p-2 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <span className="truncate text-gray-700">{peopleList[0]}</span>
              <ChevronDown
                className={`transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100">
                {peopleList.map((person, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 truncate"
                  >
                    {person}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Items */}
          <nav className="flex-1">
            {sideBarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-500 cursor-pointer transition-colors group"
              >
                <span className="text-gray-600 group-hover:text-white">
                  {item.icon}
                </span>
                <span className="text-gray-700 group-hover:text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </nav>
        </div>
        {/* Bottom Navigation */}
        <div className="absolute w-full bottom-0 px-4 pb-4">
          <div className="flex flex-col ">
            <div className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors group">
              <Phone size={16} className="text-gray-600 " />
              <span className="text-gray-600 ">Support</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors group">
              <GoSignOut size={16} className="text-gray-600" />
              <span className="text-gray-600 ">Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 sm:p-8 sm:ml-60 border border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3"></div>
          <div className="mb-4">
            <div className="flex flex-row justify-between border-b border-gray-200 w-full sm:hidden ">
              <div className="">
                <div className="flex items-center px-4 py-2 mb-2">
                  <img src={dark_logo} alt="logo" className="w-6 h-6" />
                  <h1 className="text-2xl ">CodeAnt AI</h1>
                </div>
              </div>

              <div className="mr-7 flex items-center z-50">
                {/* <GiHamburgerMenu
                  size={24}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                /> */}
                <HamburgerMenu sideBarItems={sideBarItems} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative p-4 sm:p-0">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Repositories
                  </h1>
                  <p className="text-gray-600 ">
                    {" "}
                    {repositories.length + " "}total repositories
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition flex items-center gap-2 hover:translate-y-0.5 hover:scale-[1.02]">
                  <RefreshCcw size={16} />
                  <span>Refresh All</span>
                </button>
                <button className="px-4 py-2 bg-blue-600 border border-blue-700 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 hover:translate-y-0.5 hover:scale-[1.02]">
                  <PlusIcon size={20} />
                  <span>Add Repository</span>
                </button>
              </div>
            </div>
            <div className="relative w-[480px] max-w-sm px-4 sm:p-0  mt-4 ">
              <input
                type="text"
                className="w-[480px] rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search Repositories"
              />
              {/* "Magnifying glass" or any icon at left */}
              <div className="absolute ml-2 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
            </div>
          </div>

          {/* Repository List */}
          <div className="grid gap-4"></div>
          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.005] hover:bg-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-base font-semibold text-gray-900">
                      {repo.name}
                    </h2>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                        repo.visibility === "Public"
                          ? "bg-green-100 text-green-600 border-green-600"
                          : "bg-gray-100 text-gray-600 border-gray-600"
                      }`}
                    >
                      {repo.visibility}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs flex items-center space-x-5">
                    <span className="flex items-center space-x-2">
                      <span>{repo.language}</span>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span><GoDatabase /></span>
                      <span>{repo.size} KB</span>
                    </span>
                    <span>Updated {repo.lastUpdated}</span>
                  </p>
                </div>

                {/* {repo.contributors.length > 0 && (
                    <div className="flex -space-x-2">
                      {repo.contributors.map((contributor, idx) => (
                      <div
                        key={idx}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${contributor.color} border-2 border-white`}
                        title={contributor.name}
                      >
                        {contributor.name[0]}
                      </div>
                      ))}
                    </div>
                    )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
