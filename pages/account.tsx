import React from "react";
import Image from "next/image";
import SideBar from "../components/SideBar";

const accountInfoPage = () => {
  return (
    <div className="font-sans container grid grid-cols-12">
      <div className="col-span-2 w-full h-screen  bg-blue-400">
        <SideBar />
      </div>
      <div className="col-span-10">
        <div className="h-10">
          <p className="mx-auto font-bold p-10 text-lg">Account</p>
        </div>
        <div className="p-12">
          <div className="h-28 ">
            <p className="font-bold mb-2">Avatar</p>
            <div className="flex gap-x-3">
              <Image
                src="/assets/images/profile.png"
                alt="profile icon"
                width={40}
                height={40}
              />
              <button className="border-2 p-1 w-28 shadow-sm">Change</button>
              <button className="border-2 p-1 w-28 shadow-sm">Remove</button>
            </div>
            <hr className="mt-4" />
          </div>
          <div className="h-28">
            <div className="flex w-full gap-x-32">
              <div className="flex w-2/4 flex-col">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  className="p-2 border-2 focus:border-yellow-400 focus:outline-none shadow-sm"
                />
              </div>
              <div className="flex w-2/4 flex-col">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  className="p-2 border-2 shadow-sm focus:border-yellow-400 focus:outline-none shadow-sm"
                />
              </div>
            </div>
            <hr className="mt-4" />
          </div>
          <div className="flex flex-row gap-x-32 w-full h-28">
            <div className="flex w-2/4 flex-col">
              <label htmlFor="">Email address</label>
              <input
                type="text"
                className="p-2 border-2 shadow-sm focus:border-yellow-400 focus:outline-none shadow-sm"
              />
            </div>
            <div className="flex w-2/4 flex-col">
              <label htmlFor="">User name</label>
              <input
                type="text"
                className="p-2 border-2 shadow-sm focus:border-yellow-400 focus:outline-none shadow-sm"
              />
            </div>
          </div>
          <div className="h-20 flex w-full">
            <div className="flex-col w-2/4">
              <p className="font-bold">Delete your account</p>
              <p className="text-gray-400">
                By deleting this account you will loose all your data
              </p>
            </div>
            <div className="flex-col w-2/4">
              <button className="border-2 border-red-200 p-1 w-32 shadow-md float-right hover:bg-red-500 hover:border-0 hover:text-white focus:outline-none hover:outline-none">
                Delete account
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-sideBarColor border-1 text-white shadow-lg p-2 w-32">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default accountInfoPage;
