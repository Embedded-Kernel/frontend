import Button from "../components/Layouts/Button";
import HomeSidebar from "../components/Layouts/HomeSideBar";
import Input from "../components/Layouts/Input";
import TitleSsc from "../components/Layouts/TitleSsc";
import Image from "next/image";
import { useRef, useState } from "react";

const LoginPage = () => {
  return (
    <div className="container grid grid-cols-12 font-sm font-poppins">
      <HomeSidebar />
      <div className="col-span-12 md:col-span-12 md:col-span-8 lg:col-span-12 flex justify-items-center justify-center">
        <div className="m-0 w-full flex flex-col col-span-12 lg:w-2/5 m-10 animated fadeIn faster p-4 items-center">
          <TitleSsc />
          <p className="text-xl mt-8 font-bold mb-3">Welcome back !</p>
          <p className="text-sm">Enter your account details here below</p>
          <div className="flex-row md:flex gap-x-12 flex-row mt-7 text-sm w-full flex-start">
            <div className="w-full gap-y-5 md:flex flex-col gap-y-3 w-3/4">
              <p className="text-yellowColor font-bold">User name or email</p>
              <div className="flex gap-x-4">
                <Input
                  type={"text"}
                  placeholder={"Enter your username or email"}
                />
              </div>
              <p className="text-yellowColor font-bold">Password</p>
              <div className="flex gap-x-4">
                <Input type={"text"} placeholder={"Enter your password"} />
              </div>
              <p className="flex-end">Forgot your password?</p>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="h-4 w-4 checked:bg-yellow-600 " />
                  <span className="ml-2">Remember me</span>
                </label>
              </div>
            </div>
          </div>
          <button className="w-full bg-sideBarColor md:bg-sideBarColor mt-10 h-10 w-100 text-sm shadow-lg text-white font-bold">
            Sign in
          </button>
          <p className="text-sm text-center mt-8">
            New to Ssc?{" "}
            <span className="text-sm text-yellowColor font-bold">Sign Up</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
