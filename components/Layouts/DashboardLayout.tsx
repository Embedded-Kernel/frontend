import SideBar from '../shared/Sidebar';
import { Bell } from 'react-feather';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: JSX.Element }) {
  return (
    <section className="relative flex min-h-screen font-poppins">
      <SideBar />
      <section className="w-full px-12 bg-dash">
        <section className="flex items-center justify-end py-6">
          <div className="w-2/5 relative font-bold mr-64">
            <div className="absolute top-3 left-2 text-sm text-searchColor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="search anything..."
              className="px-10 focus:outline-none  py-3  w-full h-full shadow-sm rounded-xl"
            />
          </div>
          <div className="flex items-center">
            <Bell />
            <Image
              src="https://gravatar.com/avatar/9713f9f6117e99e93b8c6da62575fddc?s=400&d=robohash&r=x"
              alt="user-avatar"
              width={60}
              height={40}
            />
          </div>
        </section>
        <section>{children}</section>
      </section>
    </section>
  );
}
