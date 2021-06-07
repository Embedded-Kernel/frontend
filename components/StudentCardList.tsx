import React from "react";
import { peoples } from "./dataSource/cardList";

export default function StudentCardList() {
  return (
    <div className="overflow-hidden">
      <div className="min-w-screen  flex items-center justify-center overflow-hidden">
        <div className="w-full lg:w-5/6 ml-44 shadow-md mb-5 py-3 mt-8">
          <div className="px-6 py-2 text-lg font-medium text-gray-900 flex">
            <h1>Student Cards</h1>
            <span className="px-2 py-2 text-sm text-gray-500">120</span>
            <div className="ml-auto items-right mt-auto">
              <input
                type="text"
                placeholder="Search cards..."
                className=" py-2 px-3 text-grey-darkest text-sm  italic focus:outline-none  "
              />
            </div>
          </div>

          <div className="bg-white rounded my-6 mt-3">
            <table className=" divide-y divide-gray-200 min-w-max w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Holder
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Card No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Balance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Year
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Class
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Activity
                  </th>

                  <th
                    scope="col"
                    className="px-14 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white w-4/5">
                {peoples.map((person) => (
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-1">
                          <div className="text-sm text-gray-900">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.cardno}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.balance}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.year}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.class}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap flex">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <a
                        href="#"
                        className="text-gray-600 shadow px-2 py-2 hover:text-indigo-900 "
                      >
                        View more
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
