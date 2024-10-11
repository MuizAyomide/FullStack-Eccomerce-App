import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");

  const onSubmitHandler = async () => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      action=""
      className="flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 mb-14 gap-4 text-gray-800"
    >
      <div className="inline-flex justify-center items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("sign up")}
          >
            Create account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white mt-4 font-light px-8 py-2 cursor-pointer">
        {currentState === "login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
