import React, { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Axios from "../../api/axios";
import useAxios from "../../CustomHooks/useAxios";

export default function LoginSignup() {
  const [version, setVersion] = useState("logIn");
  const [formCredentials, dispatch] = useReducer(reducer, {
    logIn: {
      email: "",
      password: "",
    },
    signUp: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function reducer(state, action) {
    const field = action.payload.field;
    const value = action.payload.value;
    switch (action.type) {
      case "logIn":
        return {
          ...state,
          logIn: {
            ...state.logIn,
            [field]: value,
          },
        };

      case "signUp":
        return {
          ...state,
          signUp: {
            ...state.signUp,
            [field]: value,
          },
        };
    }
  }

  function toggleVersion() {
    setVersion((prev) => (prev === "logIn" ? "signUp" : "logIn"));
  }

  function handelInputChange(event) {
    dispatch({
      type: version,
      payload: { field: event.target.name, value: event.target.value },
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const hasEmptyValue = Object.values(formCredentials[version]).some(
      (value) => value === "",
    );
    if (hasEmptyValue) {
      alert("Please fill out all fields");
      return;
    }

    if (version === "logIn") {
      logIn();
    } else {
      signUp();
    }
  }

  async function logIn() {
    const axios = Axios();
    try {
      const results = await axios.post("/logIn", {
        ...formCredentials["logIn"],
      });
      localStorage.setItem('access_token', results.data.access_token)
      localStorage.setItem('refresh_token', results.data.refresh_token)
      console.log(results);
    } catch (e) {
      console.log(e);
    }
  }

  async function signUp() {
    function checkPasswordMatch() {
      const password_entered = formCredentials.signUp.password;
      const password_entered_confirm = formCredentials.signUp.confirmPassword;
      if (password_entered !== password_entered_confirm) {
        return false;
      }
      return true;
    }
    
    if (checkPasswordMatch()) {
      try {
        const axios = Axios();
        const results = await axios.post("/SignUp", {
          ...formCredentials["signUp"],
        });
        console.log(results);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Passwords must match");
    }
  }

  async function DummyProtected(){
    const data = await useAxios("/protected", { data: "some data" });
    console.log(data)
  }

  return (
    <div className="sign-in h-screen">
      <div className="signInSignup-navbar border-customRenchGray relative flex h-[10%] items-center justify-start border-b px-3 lg:px-6">
        <Link to="/" className="absolute">
          <FontAwesomeIcon icon={faArrowLeft} className="text-customDark" />
        </Link>
        <div className="circle flex flex-grow items-center justify-center">
          <span className="bg-customRenchGray h-12 w-12 rounded-full"></span>
        </div>
      </div>
      <div className="sign-in-container bg-customSeaSalt container mx-auto flex h-[90%] items-center justify-center">
        <div className="sign-in-card-wrapper flex h-fit w-[95%] flex-col gap-5 sm:w-[80%] lg:w-[60%] xl:w-[45%]">
          <h1 className="text-customDark font-poppinsBold mb-3 text-2xl">
            {version === "logIn" ? "Log in" : "Sign up"}
          </h1>
          <button className="bg-blue-300 w-fit" onClick={DummyProtected}>dummy</button>
          <form className="flex flex-col">
            {version === "signUp" && (
              <>
                <label htmlFor="name" className="text-customRenchGray">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  className="formInputText"
                  onChange={handelInputChange}
                  value={formCredentials[version].username}
                  required
                ></input>
              </>
            )}
            <label htmlFor="email" className="text-customRenchGray">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="formInputText"
              onChange={handelInputChange}
              value={formCredentials[version].email}
              required
            ></input>
            <label htmlFor="password" className="text-customRenchGray">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="formInputText"
              onChange={handelInputChange}
              value={formCredentials[version].password}
              required
            ></input>
            {version === "signUp" && (
              <>
                <label
                  htmlFor="confirm-password"
                  className="text-customRenchGray"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  className="formInputText"
                  onChange={handelInputChange}
                  value={formCredentials[version].confirmPassword}
                  required
                ></input>
              </>
            )}
            <div className="flex items-center justify-center">
              <button
                className="bg-customRenchGray text-customWhite h-14 w-[90%] rounded-full md:w-[70%]"
                onClick={handleSubmit}
              >
                {version === "logIn" ? "Log in" : "Sign up"}
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <span className="text-customDark pr-2">
              {version === "signUp"
                ? "Already have an account?"
                : "Dont't have an account?"}
            </span>

            <span
              className="text-customDark underline hover:cursor-pointer"
              onClick={toggleVersion}
            >
              {version === "signUp" ? "Log In" : "Sign up"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
