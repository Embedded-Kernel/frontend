import React from "react";
import {
  RiAccountBoxLine,
  RiArrowLeftRightFill,
  RiDashboardLine,
} from "react-icons/ri";
import { MdContactMail, MdTimeline } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="relative">
      <div className="sidebar text-blue-100 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a
          href="/dashboard"
          className="mt-5 text-white flex items-center space-x-2 px-10"
        >
          <span className="text-2xl font-extrabold">Smart SC</span>
        </a>
        <nav>
          <Link href="/dashboard">
            <a className="block mt-1 group flex items-center py-2.5 px-7  transition duration-200">
              <RiDashboardLine />
              <span>Dashboard</span>
            </a>
          </Link>
          <Link href="/transaction">
            <a className="block mt-1 group flex items-center py-2.5 px-7  transition duration-200">
              <MdContactMail />
              <span>Transaction</span>
            </a>
          </Link>
          <Link href="/cards">
            <a className="block mt-1 group flex items-center py-2.5 px-7  transition duration-200">
              <AiOutlineCreditCard />
              <span>Cards check</span>
            </a>
          </Link>
          <Link href="/reports">
            <a className="block mt-1 group flex items-center py-2.5 px-7  transition duration-200">
              <MdTimeline />
              <span>Reports</span>
            </a>
          </Link>
          <Link href="/accounts">
            <a className="block mt-1 group flex items-center py-2.5 px-7  transition duration-200">
              <RiAccountBoxLine />
              <span>Accounts</span>
            </a>
          </Link>
          <hr />
          <Link href="/logout">
            <a className="block mt-60 group flex items-center py-2.5 px-7  transition duration-200">
              <RiArrowLeftRightFill />
              <span>Log out</span>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default SideBar;
