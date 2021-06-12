import React from "react";
import { useState } from "react";
import { ViewStudent } from "../modals/ViewStudent";

export const tableConstants = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return [
    {
      title: "Holder",
      render: (rowData: any) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: "Card No",
      render: (rowData: any) => {
        return <span>{rowData.cardno}</span>;
      },
    },
    {
      title: "Balance",
      render: (rowData: any) => {
        return <span>{rowData.balance}</span>;
      },
    },
    {
      title: "Year",
      render: (rowData: any) => {
        return <span>{rowData.year}</span>;
      },
    },
    {
      title: "Class",
      render: (rowData: any) => {
        return <span>{rowData.class}</span>;
      },
    },
    {
      title: "Status",
      render: () => {
        return (
          <>
            <span className="inline-flex px-2 text-xs font-semibold text-green-800 bg-green-100 rounded-full leading-5">
              Active
            </span>
          </>
        );
      },
    },
    {
      title: "Activity",
      render: () => {
        return (
          <>
            <div className="flex px-3 py-4 whitespace-nowrap">
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "View",
      render: () => {
        return (
          <>
            <a
              href="#"
              className="px-2 py-2 text-gray-600 shadow hover:text-indigo-900 "
              onClick={openModal}
            >
              View more
            </a>
            <ViewStudent showModal={showModal} setShowModal={setShowModal} />
          </>
        );
      },
    },
  ];
};
