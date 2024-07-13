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
  const [dropDown, setDropdown] = useState({
    jobType: {
      isActive: false,
      value: "",
    },
    location: {
      isActive: false,
      value: "",
    },
    pay: {
      isActive: false,
      value: "",
    },
  });

  const [searchBar, setSearchBar] = useState("");

  function trackSearch(event) {
    const value = event.currentTarget.value;
    setSearchBar(value);
  }

  function makeJobSearch(event) {
    event.preventDefault();
    const searchQuery = {
      query: searchBar,
      jobType: dropDown.jobType.value,
      location: dropDown.location.value,
      pay: dropDown.pay.value,
    };
    console.log(searchQuery);
  }

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

  function dropdownOptionSelected(event) {
    event.stopPropagation();
    const className = event.currentTarget.className;
    const index = className.indexOf("-");
    if (index === -1) {
      console.error("Invalid className format, expected a hyphen.");
      return;
    }
    const name = className.slice(index + 1);
    const attribute = event.target.getAttribute("data-value");
    setDropdown((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: attribute,
      },
    }));
  }

  return (
    <div className="bg-customDark h-fit">
      {/* navbar wrapper */}
      <div className="text-customWhite container mx-auto flex items-center justify-between py-4">
        {/* site logo */}
        <div className="flex items-center justify-center gap-2">
          <img
            className="h-16 w-auto"
            src="./assets/logo-image/logo.png"
            alt="website logo"
          ></img>
          FanJobz
        </div>
        {/* page navigation links*/}
        <ul className="flex flex-grow items-center justify-center gap-4">
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
          <button className="h-11 w-36 rounded bg-blue-200">
            <Link
              className="flex h-full w-full items-center justify-center"
              to="/postJob"
            >
              Post A Job
            </Link>
          </button>
          <button className="h-11 w-24 rounded bg-red-400">
            <Link
              to="loginSignup"
              className="flex h-full w-full items-center justify-center"
            >
              sign In
            </Link>
          </button>
        </div>
      </div>
      {/* navbar divider */}
      <div className="line"></div>
      {/* bottom navbar gird */}
      <div className="grid-cols-custom container mx-auto grid gap-4 py-9">
        {/* selection 1 */}
        <div className="option-container border-r-1 relative flex h-16 items-center justify-between border-r border-gray-400 text-white">
          <div className="inner-container flex w-full items-center gap-2">
            {/* prefix icon */}
            <div className="flex items-center justify-center rounded-full border border-gray-400 p-1.5">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="h-5 w-5 text-white"
              />
            </div>
            <span className="block grow">
              {dropDown.jobType.value === ""
                ? "Job Type"
                : dropDown.jobType.value}
            </span>
            {/* postfix icon */}
            <div
              className="postfix-wrapper mr-3 hover:cursor-pointer"
              id="arrowDown-jobType"
              onClick={(e) => activateDropdown(e)}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          {dropDown.jobType.isActive && (
            <div className="dropdown-menu border-customDark text-customDark absolute top-16 z-10 h-fit w-full flex-col justify-center rounded-b-lg border-2 bg-white px-2 py-2 hover:cursor-pointer">
              <div
                className={
                  dropDown["jobType"].value !== "Designer"
                    ? "options-jobType"
                    : "options-jobType bg-customRenchGray"
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
                    : "options-jobType bg-customRenchGray"
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
                    : "options-jobType bg-customRenchGray"
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
        <div className="option-container border-r-1 relative flex h-16 items-center justify-between border-r border-gray-400 text-white">
          <div className="inner-container flex w-full items-center gap-2">
            {/* prefix icon */}
            <div className="flex items-center justify-center rounded-full border border-gray-400 p-1.5">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="h-5 w-5 text-white"
              />
            </div>
            <span className="block grow">
              {dropDown.location.value === ""
                ? "Location"
                : dropDown.location.value}
            </span>
            {/* postfix icon */}
            <div
              className="postfix-wrapper mr-3 hover:cursor-pointer"
              id="arrowDown-location"
              onClick={(e) => activateDropdown(e)}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          {dropDown.location.isActive && (
            <div className="dropdown-menu border-customDark text-customDark absolute top-16 z-10 h-fit w-full flex-col justify-center rounded-b-lg border-2 bg-white px-2 py-2 hover:cursor-pointer">
              <div
                className={
                  dropDown["location"].value !== "New York"
                    ? "options-location"
                    : "options-location bg-customRenchGray"
                }
                data-value="New York"
                onClick={dropdownOptionSelected}
              >
                New York
              </div>
              <div
                className={
                  dropDown["location"].value !== "Arizona"
                    ? "options-location"
                    : "options-location bg-customRenchGray"
                }
                data-value="Arizona"
                onClick={dropdownOptionSelected}
              >
                Arizona
              </div>
              <div
                className={
                  dropDown["location"].value !== "New Jersey"
                    ? "options-location"
                    : "options-location bg-customRenchGray"
                }
                data-value="New Jersey"
                onClick={dropdownOptionSelected}
              >
                New Jersey
              </div>
            </div>
          )}
        </div>
        {/* selection 3 */}
        <div className="option-container border-r-1 relative flex h-16 items-center justify-between border-r border-gray-400 text-white">
          <div className="inner-container flex w-full items-center gap-2">
            {/* prefix icon */}
            <div className="flex items-center justify-center rounded-full border border-gray-400 p-1.5">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="h-5 w-5 text-white"
              />
            </div>
            <span className="block grow">
              {dropDown.pay.value === "" ? "Pay" : dropDown.pay.value}
            </span>
            {/* postfix icon */}
            <div
              className="postfix-wrapper mr-3 hover:cursor-pointer"
              id="arrowDown-pay"
              onClick={(e) => activateDropdown(e)}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          {dropDown.pay.isActive && (
            <div className="dropdown-menu border-customDark text-customDark absolute top-16 z-10 h-fit w-full flex-col justify-center rounded-b-lg border-2 bg-white px-2 py-2 hover:cursor-pointer">
              <div
                className={
                  dropDown["pay"].value !== "$13-16/hr"
                    ? "options-pay"
                    : "options-pay bg-customRenchGray"
                }
                data-value="$13-16/hr"
                onClick={dropdownOptionSelected}
              >
                $13-16 /hr
              </div>
              <div
                className={
                  dropDown["pay"].value !== "$17-20/hr"
                    ? "options-pay"
                    : "options-pay bg-customRenchGray"
                }
                data-value="$17-20/hr"
                onClick={dropdownOptionSelected}
              >
                $17-20 /hr
              </div>
              <div
                className={
                  dropDown["pay"].value !== "$21+ /hr"
                    ? "options-pay"
                    : "options-pay bg-customRenchGray"
                }
                data-value="$21+ /hr"
                onClick={dropdownOptionSelected}
              >
                $21+ /hr
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex h-16 items-center justify-between gap-2 text-white">
          <div className="flex items-center justify-center rounded-full border border-gray-400 p-1.5">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-white" />
          </div>
          <form onSubmit={makeJobSearch} className="grow">
            <input
              type="text"
              className="h-7 w-full rounded-r pl-2 text-black"
              placeholder="Search Job"
              value={searchBar}
              onChange={trackSearch}
            ></input>
            <input type="submit" hidden></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
