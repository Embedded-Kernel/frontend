import Button from "../components/Layouts/Button";
import HomeSidebar from "../components/Layouts/HomeSideBar";
import Input from "../components/Layouts/Input";
import TitleSsc from "../components/Layouts/TitleSsc";
import Image from 'next/image'
import { useRef, useState } from "react";

const SignUpPage = () => {

    const [currentFile, setCurrentFile] = useState("")
    const fileInput = useRef();

    return (
        <div className="container grid grid-cols-12 font-sm font-poppins">
            <HomeSidebar />
            <div className="col-span-12 md:col-span-12 md:col-span-8 lg:col-span-12 flex justify-items-center justify-center">
                <div className="m-0 w-full flex flex-col col-span-12 lg:w-3/5 m-10 animated fadeIn faster p-4 items-center">
                    <TitleSsc/>
                    <p className="text-xl mt-8 font-bold mb-3">Create an account</p>
                    <p className="text-sm">Enter your account details here below</p>
                    <div className="flex-row md:flex gap-x-12 flex-row mt-7 text-sm w-full flex-start">
                        <div className="w-full gap-y-5 md:flex flex-col gap-y-3 w-2/4">
                            <p className="text-yellowColor font-bold">First name</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Enter your first name'} />
                            </div>
                            <p className="text-yellowColor font-bold">Gender</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Gender'} />
                            </div>
                            <p className="text-yellowColor font-bold">Gender</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Email address'} />
                            </div>
                            <p className="text-yellowColor font-bold">Password</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Password'} />
                            </div>
                            {/* <div className="flex mt-2 bg-grey-lighter">
                                <label
                                    className="w-48 flex items-center flex-col h-10 w-24 py-2 bg-white text-blue shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                                    <span className="text-base leading-normal">Profile picture</span>
                                    <input type='file' className="hidden" onChange={(e) => setCurrentFile(e.target.value)}/>
                                </label>
                                <span className={"m-2"}>{currentFile || "No file choosen"}</span>
                            </div> */}
                        </div>

                        <div className="w-full gap-y-5 md:flex flex-col w-2/4 gap-y-3">
                            <p className="text-yellowColor font-bold">Last name</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Last name'} />
                            </div>
                            <p className="text-yellowColor font-bold">User name</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Username'} />
                            </div>
                            <p className="text-yellowColor font-bold">Role</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Role'} />
                            </div>
                            <p className="text-yellowColor font-bold">Confirm password</p>
                            <div className="flex gap-x-4">
                                <Input type={'text'} placeholder={'Confirm password'} />
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-sideBarColor md:bg-sideBarColor mt-10 h-10 w-100 text-sm shadow-lg text-white font-bold">Sign Up</button>
                    <p className="text-sm text-center mt-8">Already have an account? <span className="text-sm text-yellowColor font-bold">Login</span> </p>
                </div>
            </div>
        </div>
    )
}
export default SignUpPage;
