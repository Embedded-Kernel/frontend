import React, { useState, ReactNode, useContext } from "react";
import TitleSsc from "./Layouts/TitleSsc";
import {
  IModalContext,
  ModalContext,
} from "./state-management/ContextProvider";
import Image from "next/image";

type Props = {
  children?: ReactNode;
  modalSize?: string;
};

export default function Modal(props: Props) {
  const { modalState, setModalState, setShowSignIn }: IModalContext =
    useContext(ModalContext);
  return (
    <>
      {modalState ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-5/5 my-6 mx-auto max-w-3xl md:w-2/5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="absolute -top-3 -right-3 cursor-pointer"
                  onClick={() => {
                    setModalState && setModalState(false),
                      setShowSignIn && setShowSignIn(true);
                  }}
                >
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
                <div className="relative flex-auto">{props.children}</div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
