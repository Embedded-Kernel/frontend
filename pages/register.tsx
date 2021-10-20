import Link from "next/link";
import { useContext, useState } from "react";
import Input from "../components/Layouts/Input";
import LoginPage from "../components/Login";
import {
  IModalContext,
  ModalContext,
} from "../components/state-management/ContextProvider";

const SignUpPage = () => {
  const {
    showSignIn,
    setShowSignIn,
    showSignUp,
    setShowSignUp,
  }: IModalContext = useContext(ModalContext);
  return (
    <>
      {showSignUp ? (
        <div className="container grid grid-cols-12 font-sm font-poppins">
          <div className="col-span-12 md:col-span-12 md:col-span-8 lg:col-span-12 flex justify-items-center justify-center">
            <div className="m-0 w-full flex flex-col col-span-12 lg:w-5/5 mr-5 ml-5  animated fadeIn faster p-2 items-center">
              <p className="text-xl font-bold mb-2">Register your school</p>
              <p className="text-sm text-gray">STEP 1</p>
              <div className="flex-row md:flex gap-x-6 flex-row mt-4 text-sm w-full flex-start">
                <div className="w-full flex flex-col gap-y-1 md:w-2/4 lg:gap-y-3">
                  <p className="text-yellowColor font-bold">First name</p>
                  <div className="flex gap-x-4">
                    <Input
                      type={"text"}
                      placeholder={"Enter your first name"}
                    />
                  </div>
                  <p className="text-yellowColor font-bold">Gender</p>
                  <div className="flex gap-x-4">
                    <Input type={"text"} placeholder={"Gender"} />
                  </div>
                  {/* <p className="text-yellowColor font-bold">Gender</p>
                  <div className="flex gap-x-4">
                    <Input type={"text"} placeholder={"Email address"} />
                  </div> */}
                  <div className="">
                    <span className="text-gray-700">Account Type</span>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio border border-gray-300"
                          name="accountType"
                          value="personal"
                        />
                        <span className="ml-2">Personal</span>
                      </label>
                      <label className="inline-flex items-center ml-6">
                        <input
                          type="radio"
                          className="form-radio border border-gray-300"
                          name="accountType"
                          value="busines"
                        />
                        <span className="ml-2">Business</span>
                      </label>
                    </div>
                  </div>
                  <p className="text-yellowColor font-bold">Password</p>
                  <div className="flex gap-x-4">
                    <Input type={"text"} placeholder={"Password"} />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-1 md:w-2/4 lg:gap-y-3">
                  <p className="text-yellowColor font-bold">Last name</p>
                  <div className="flex gap-x-4">
                    <Input type={"text"} placeholder={"Last name"} />
                  </div>
                  <p className="text-yellowColor font-bold">User name</p>
                  <div className="flex gap-x-4">
                    <Input type={"text"} placeholder={"Username"} />
                  </div>
                  <div>
                    <label className="block mt-4">
                      <span className="text-gray-700">Requested Limit</span>
                      <select className="form-select border border-gray-300 mt-1 block w-full">
                        <option>$1,000</option>
                        <option>$5,000</option>
                        <option>$10,000</option>
                        <option>$25,000</option>
                      </select>
                    </label>
                  </div>
                  {/* <p className="text-yellowColor font-bold">Role</p>
                  <div className="flex gap-x-4">
                    <Input type={"text"} placeholder={"Role"} />
                  </div> */}
                  <p className="text-yellowColor font-bold">Confirm password</p>
                  <div className="flex gap-x-4">
                    <Input type={"text"} placeholder={"Confirm password"} />
                  </div>
                </div>
              </div>
              <button className="w-full bg-sideBarColor md:bg-sideBarColor mt-5  h-10 w-100 text-sm shadow-lg text-white font-bold">
                Sign Up
              </button>

              <p className="text-sm text-center mt-4">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setShowSignIn && setShowSignIn(true);
                    setShowSignUp && setShowSignUp(false);
                  }}
                  className="text-sm text-yellowColor font-bold"
                >
                  <Link href={"#"}>Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : showSignIn ? (
        <LoginPage />
      ) : null}
    </>
  );
};

export default SignUpPage;
