import Input from "../components/Layouts/Input";
import React, { useContext, useState } from "react";
import Link from "next/link";
import SignUpPage from "../pages/register";
import {
  IModalContext,
  ModalContext,
} from "./state-management/ContextProvider";
import { useEffect } from "react";

const LoginPage = () => {
  const {
    showSignIn,
    setShowSignIn,
    showSignUp,
    setShowSignUp,
  }: IModalContext = useContext(ModalContext);

  return (
    <>
      {showSignIn ? (
        <div className="container grid grid-cols-12 font-sm font-poppins">
          <div className="col-span-12 md:col-span-12 md:col-span-8 lg:col-span-12 flex justify-items-center justify-center">
            <div className="m-0 w-full flex flex-col col-span-12 lg:w-4/5 mt-0 animated fadeIn faster p-4 items-center">
              <p className="text-l mt-3 font-bold mb-3">Welcome back !</p>
              <p className="text-sm mt-3">
                Enter your account details here below
              </p>
              <div className="flex-row md:flex gap-x-12 flex-row mt-4 text-sm w-full flex-start">
                <div className="w-full space-y-2 md:flex flex-col gap-y-2 w-3/4">
                  <p className="text-yellowColor font-bold">
                    User name or email
                  </p>
                  <div className="flex">
                    <Input
                      type={"text"}
                      placeholder={"Enter your username or email"}
                    />
                  </div>
                  <p className="text-yellowColor font-bold">Password</p>
                  <div className="flex gap-x-2">
                    <Input type={"text"} placeholder={"Enter your password"} />
                  </div>
                  <div className="grid justify-items-end">
                    <p className="font-bold">Forgot your password?</p>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 checked:bg-yellow-600 "
                      />
                      <span className="ml-2">Remember me</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="w-full bg-sideBarColor md:bg-sideBarColor mt-4 h-10 w-100 text-sm shadow-lg text-white font-bold">
                Sign in
              </button>
              <p className="text-sm text-center mt-6">
                New to Ssc?&emsp;
                <span
                  onClick={() => {
                    setShowSignIn && setShowSignIn(false);
                    setShowSignUp && setShowSignUp(true);
                  }}
                  className="text-sm text-yellowColor font-bold"
                >
                  <Link href={"#"}>SignUp</Link>
                </span>
                &emsp;
              </p>
            </div>
          </div>
        </div>
      ) : showSignUp ? (
        <SignUpPage></SignUpPage>
      ) : null}
    </>
  );
};
export default LoginPage;
