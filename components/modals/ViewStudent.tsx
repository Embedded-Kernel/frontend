import React from "react";
// import "./style.css"
export const ViewStudent = ({ showModal, setShowModal }: any) => {
  return (
    <>
      {showModal ? (
        <div className=" min-h-screen py-16 px-10  fixed inset-0 bg-black bg-opacity-5  w-full flex justify-center items-start md:items-center pt-10 md:pt-0  flex-col items-center">
          <div className=" px-20 w-3/4">
            <div className="relative px-10 py-8 bg-white   mx-8 md:mx-0  rounded-md sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="block pl-2 font-bold text-xl text-gray-900">
                    <h1 className="font-sans uppercase">Student Data</h1>
                  </div>
                </div>
                <div>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 divide-y divide-gray-200">
                    <div className="flex items-center space-x-16 text-sm font-medium  ">
                      <div className="flex flex-col  ">
                        <label className=" pb-2 ">First name</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:border-yellow-400 shadow-md sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                          placeholder="First name"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label className="pb-2">Last name</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:border-yellow-400 shadow-md sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-16 text-sm font-medium">
                      <div className="flex flex-col   mt-4">
                        <label className=" pb-2 ">Dorm number</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:border-yellow-400 shadow-md sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                          placeholder="Dorm number"
                        />
                      </div>
                      <div className="flex flex-col mt-4 ">
                        <label className="pb-2">Table number</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:border-yellow-400 shadow-md sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                          placeholder="Table number"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-16 text-sm font-medium">
                      <div className="flex flex-col   mt-4">
                        <label className="pb-2 ">Place of residence</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:border-yellow-400 shadow-md sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                          placeholder="Residence"
                        />
                      </div>
                      <div className="flex flex-col mt-4 ">
                        <label className="pb-2">Religion</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:border-yellow-400 shadow-md sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                          placeholder="Religion"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-16 text-sm ">
                      <div className="flex flex-col   mt-4">
                        <label className="pb-2 font-medium">
                          Delete student
                        </label>
                        <p className="text-gray-400 ">
                          By deleting this student you will loose all data
                        </p>
                      </div>
                      <div className="flex flex-col mt-4 ">
                        <button
                          className="px-4 py-1 flex justify-center items-center w-24 border shadow-md sm:text-sm border-red-300 rounded text-gray-600 focus:outline-none"
                          placeholder="Last name"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-gray-900 flex justify-center  ml-44 items-center w-28 text-white px-4 py-2 rounded-md focus:outline-none"
                      onClick={() => setShowModal((prev: any) => !prev)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
