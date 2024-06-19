import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faLocationDot,
  faMoneyBill,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [dropDown, setDropdown] = React.useState({
    jobType: {
      isActive: true,
      value: '',
    },
    location: {},
    pay: {},
  });

  function activateDropdown(event) {
    event.stopPropagation();
    const id = event.currentTarget.id; 
    const index = id.indexOf("-");
    if (index === -1) {
      console.error("Invalid ID format, expected a hyphen.");
      return;
    }
    const name = id.slice(index + 1);
    if (!dropDown.hasOwnProperty(name)) {
      console.error(`Dropdown with name ${name} does not exist.`);
      return;
    }
    setDropdown((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        isActive: !prev[name].isActive,
      },
    }));
  }

  function dropdownOptionSelected(event){
    event.stopPropagation()
    const className = event.currentTarget.className;
    const index = className.indexOf("-");
    if (index === -1) {
      console.error("Invalid className format, expected a hyphen.");
      return;
    }
    const name = className.slice(index + 1);
    const attribute = event.target.getAttribute("data-value");
    setDropdown(prev => (
      {...prev,
        [name]:{
          ...prev[name],
          value: attribute
        }
      }
    ))

  }

  return (
    <div className="bg-black h-fit">
      {/* navbar wrapper */}
      <div className="flex container mx-auto items-center py-4 justify-between  text-white ">
        {/* site logo */}
        <div className="flex items-center justify-center gap-2">
          <img className="w-auto h-16" src="./assets/logo-image/logo.png"></img>
          FanJobz
        </div>
        {/* page navigation links*/}
        <ul className="flex flex-grow justify-center items-center gap-4">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
        </ul>
        {/* buttons */}
        <div className="flex gap-2">
          <button className="py-2 px-8 bg-blue-200 rounded">Post A Job</button>
          <button className="py-2 px-8 bg-red-400 rounded">Sign In</button>
        </div>
      </div>
      {/* navbar divider */}
      <div className=" bg-gray-400 h-[.1px]"></div>
      {/* bottom navbar gird */}
      <div className="container mx-auto grid grid-cols-custom gap-4 py-9">
        {/* selection 1 */}
        <div className=" option-container relative h-16 flex items-center border-r border-r-1 border-gray-400 text-white justify-between">
          <div className="inner-container w-full flex items-center gap-2">
            {/* prefix icon */}
            <div className="border rounded-full flex items-center justify-center p-1.5 border-gray-400">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="h-5 w-5 text-white"
              />
            </div>
            <span className="block grow">
              {dropDown.jobType.value == ""
                ? "Job Type"
                : dropDown.jobType.value}
            </span>
            {/* postfix icon */}
            <div
              className="postfix-wrapper mr-3"
              id="arrowDown-jobType"
              onClick={(e) => activateDropdown(e)}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          {dropDown.jobType.isActive && (
            <div className="dropdown-menu absolute top-16 w-full h-fit bg-blue-700 py-2 px-1 flex-col justify-center ">
              <div
                className={
                  dropDown["jobType"].value !== "Designer"
                    ? "options-jobType"
                    : "options-jobType bg-red-800"
                }
                data-value="Designer"
                onClick={dropdownOptionSelected}
              >
                Designer
              </div>
              <div
                className={
                  dropDown["jobType"].value !== "Errand"
                    ? "options-jobType"
                    : "options-jobType bg-red-800"
                }
                data-value="Errand"
                onClick={dropdownOptionSelected}
              >
                Errand
              </div>
              <div
                className={
                  dropDown["jobType"].value !== "Dog Sitting"
                    ? "options-jobType"
                    : "options-jobType bg-red-800"
                }
                data-value="Dog Sitting"
                onClick={dropdownOptionSelected}
              >
                Dog Sitting
              </div>
            </div>
          )}
        </div>
        {/* selection 2 */}
        <div className=" h-16 flex items-center gap-2  border-r border-r-1 border-gray-400 text-white justify-between">
          <div className="border rounded-full flex items-center justify-center p-1.5 border-gray-400">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="h-5 w-5 text-white"
            />
          </div>
          <span className="block grow">Work Location</span>
          <FontAwesomeIcon icon={faCaretDown} className="pr-3" />
        </div>
        {/* selection 3 */}
        <div className=" h-16 flex items-center gap-2  border-r border-r-1 border-gray-400 text-white justify-between">
          <div className="border rounded-full flex items-center justify-center p-1.5 border-gray-400">
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="h-5 w-5 text-white"
            />
          </div>
          <span className="block grow">Pay</span>
          <FontAwesomeIcon icon={faCaretDown} className="pr-3" />
        </div>
        {/* selection 4 */}
        <div className=" h-16 flex items-center gap-2   text-white justify-between">
          <div className="border rounded-full flex items-center justify-center p-1.5 border-gray-400">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-white" />
          </div>
          <input
            type="text"
            className="grow pl-2 rounded-r h-7 text-black"
            placeholder="Search"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
