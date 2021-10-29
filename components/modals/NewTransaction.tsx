import React from "react";
// import "./style.css"
export const NewTransaction = ({ showModal, setShowModal }: any) => {
  return (
    <>
      {showModal ? (
        <div className=" min-h-screen py-10 px-10 text-sm fixed inset-0 bg-black bg-opacity-30  w-full flex justify-center items-start md:items-center pt-10 md:pt-0  flex-col items-center">
          <div className=" px-20 w-2/4">
            <div className="relative px-10 py-8 bg-white   mx-8 md:mx-0  rounded-md sm:p-10">
              <div className="max-w-md mx-auto ml-12">
                <div className="flex items-center">
                  <div className="block pl-2 font-bold text-xl text-gray-900">
                    <h1 className="font-sans uppercase">New Transaction</h1>
                  </div>
                </div>
                <div>
                  <div className="md:flex md:items-center  mt-8">
                    <div className="pr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.6665 3.18842H3.33317C2.40817 3.18842 1.67484 3.89784 1.67484 4.78262L1.6665 14.3478C1.6665 15.2326 2.40817 15.942 3.33317 15.942H16.6665C17.5915 15.942 18.3332 15.2326 18.3332 14.3478V4.78262C18.3332 3.89784 17.5915 3.18842 16.6665 3.18842ZM16.6665 14.3478H3.33317V9.56523H16.6665V14.3478ZM3.33317 6.37682H16.6665V4.78262H3.33317V6.37682Z"
                          fill="#EBD614"
                        />
                      </svg>
                    </div>
                    <div className="spaxe-x-4">
                      <input
                        className=" appearance-none border-yellow-300 text-md border-b-2  w-42 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-b-2"
                        id="inline-full-name"
                        type="text"
                        placeholder="Card Number"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center  mt-8 mb-6">
                    <div className="pr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.99984 1.66669C5.39984 1.66669 1.6665 5.40002 1.6665 10C1.6665 14.6 5.39984 18.3334 9.99984 18.3334C14.5998 18.3334 18.3332 14.6 18.3332 10C18.3332 5.40002 14.5998 1.66669 9.99984 1.66669ZM9.99984 16.6667C6.32484 16.6667 3.33317 13.675 3.33317 10C3.33317 6.32502 6.32484 3.33335 9.99984 3.33335C13.6748 3.33335 16.6665 6.32502 16.6665 10C16.6665 13.675 13.6748 16.6667 9.99984 16.6667ZM8.30816 7.89169C8.30816 8.50002 8.78316 8.90835 10.2582 9.28335C11.7248 9.66669 13.2998 10.3 13.3082 12.1334C13.2998 13.475 12.2998 14.2 11.0332 14.4417V15.8334H9.08316V14.4167C7.83316 14.1584 6.78316 13.3584 6.69983 11.9417H8.13316C8.20816 12.7084 8.73316 13.3084 10.0665 13.3084C11.4915 13.3084 11.8165 12.5917 11.8165 12.15C11.8165 11.55 11.4915 10.975 9.8665 10.5917C8.05816 10.1584 6.8165 9.40835 6.8165 7.91669C6.8165 6.65835 7.82483 5.84169 9.08316 5.57502V4.16669H11.0248V5.59169C12.3748 5.92502 13.0582 6.95002 13.0998 8.06669H11.6748C11.6415 7.25002 11.2082 6.70002 10.0582 6.70002C8.9665 6.70002 8.30816 7.19169 8.30816 7.89169Z"
                          fill="#EBD614"
                        />
                      </svg>
                    </div>
                    <div className="spaxe-x-4">
                      <input
                        className=" appearance-none border-yellow-300 text-md border-b-2  w-42 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-b-2"
                        id="inline-full-name"
                        type="text"
                        placeholder="Amount"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center  mt-8 mb-6">
                    <div className="pr-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="input_24px">
                          <g id="Group 54">
                            <g id="Group 53">
                              <path
                                id="Path"
                                d="M15.8462 2H3.38462C2.62308 2 2 2.61875 2 3.375V6.11812H3.38462V3.36125H15.8462V13.0069H3.38462V10.2431H2V13C2 13.7562 2.62308 14.3612 3.38462 14.3612H15.8462C16.6077 14.3612 17.2308 13.7562 17.2308 13V3.375C17.2308 2.61187 16.6077 2 15.8462 2Z"
                                fill="#F5DD01"
                              />
                            </g>
                            <path
                              id="Path_2"
                              d="M7.61546 11L10.3847 8.25L7.61546 5.5V7.5625H0.692383V8.9375H7.61546V11Z"
                              fill="#EBD614"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="spaxe-x-4">
                      <input
                        className=" appearance-none border-yellow-300 text-md border-b-2  w-42 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-b-2"
                        id="inline-full-name"
                        type="text"
                        placeholder="Activity"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-gray-900 flex justify-center  ml-24 items-center w-28 text-white px-4 py-2  text-md rounded-md focus:outline-none"
                      onClick={() => setShowModal((prev: any) => !prev)}
                    >
                      Save
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
