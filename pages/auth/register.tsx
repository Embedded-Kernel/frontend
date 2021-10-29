import Button from "../../components/Layouts/Button";
import HomeSidebar from "../../components/Layouts/HomeSideBar";

/* import Input from '../components/Layouts/Input'; */

import Image from "next/image";
import { useState } from "react";

const SignUpPage = () => {
  const [currentFile, setCurrentFile] = useState("");

  /* const fileInput = useRef(); */

  return (
    <div className="container grid grid-cols-12">
      <HomeSidebar />
      <div className="col-span-8">
        <div className="h-16 flex justify-end pr-40">
          <p className="col-span-4 mr-4 mt-4">Already have an account?</p>
          <Button name={"LOGIN"} />
        </div>
        <div className="ml-10 mt-10 flex flex-col">
          <p className="font-sans text-4xl mb-3">
            Create an account in Smart SC
          </p>
          <p className="italic">Enter your account details here below</p>
          <div className="flex gap-x-20 flex-row mt-7 w-full flex-start pr-6">
            <div className="flex flex-col gap-y-7 w-2/4">
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/si-user.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'First name'} /> */}
              </div>
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/si-user.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'Gender'} /> */}
              </div>
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/account_circle_24px_outlined.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'Email address'} /> */}
              </div>
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/account_circle_24px_outlined.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'Password'} /> */}
              </div>
              <div className="flex mt-2 bg-grey-lighter">
                <label className="w-48 flex items-center flex-col h-10 w-24 py-2 bg-white text-blue shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                  <span className="text-base leading-normal">
                    Profile picture
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setCurrentFile(e.target.value)}
                  />
                </label>
                <span className={"m-2"}>
                  {currentFile || "No file choosen"}
                </span>
              </div>
              <button className="bg-sideBarColor shadow-lg text-white font-[semi-bold] py-2 w-32">
                Sign Up
              </button>
            </div>

            <div className="flex flex-col w-2/4 gap-y-7">
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/si-user.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'Last name'} /> */}
              </div>
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/si-user.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'Username'} /> */}
              </div>
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/si-user.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'Confirm password'} /> */}
              </div>
              <div className="flex gap-x-4">
                <Image
                  src="/assets/images/si-user.svg"
                  alt="profile icon"
                  width={20}
                  height={20}
                />

                {/* <Input type={'text'} placeholder={'Role'} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
