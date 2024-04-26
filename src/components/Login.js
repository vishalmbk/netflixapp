import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    console.log("clicked");
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            backgroundSize: "contain",
          }}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl  ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="EmailId"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn ? (
          <p>
            New to Netflix?{" "}
            <span onClick={toggleSignInForm} className="cursor-pointer">
              Sign up now
            </span>
          </p>
        ) : (
          <p>
            Already user?{" "}
            <span onClick={toggleSignInForm} className="cursor-pointer">
              Sign In now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
