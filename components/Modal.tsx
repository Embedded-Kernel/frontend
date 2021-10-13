import React, { useState, ReactNode, useContext } from "react";
import TitleSsc from "./Layouts/TitleSsc";
import Login from "./Login";
import { ModalContext } from "./state-management/ContextProvider";
import Image from "next/image";

export default function Modal(children: ReactNode) {
  const { modalState, setModalState }: any = useContext(ModalContext);
  return (
    <>
      {modalState ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-5/5 my-6 mx-auto max-w-3xl md:w-2/5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="absolute -top-3 -right-3 cursor-pointer" onClick={() => setModalState(false)}>
                  <Image
                    src="/assets/images/close-image.svg"
                    width={30}
                    height={30}
                    alt="about us component"
                  />
                </div>
                {/*header*/}
                <div className="flex items-center mt-5 mb-0 justify-center">
                  <TitleSsc />
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
