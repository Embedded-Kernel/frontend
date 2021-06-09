import React, { Fragment, useState } from "react";
import MetaData from "./MetaData"
import { peoples } from "./dataSource/cardList";
import {ViewStudent} from "../components/modals/ViewStudent"

export default function StudentCardList() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };
  return (
      <Fragment>
          <MetaData title={'Students List'} />
    <div className="overflow-hidden">
      <div className="min-w-screen  flex items-center justify-center overflow-hidden">

        <div className="students w-full mr-5 mb-5 py-3 -mt-4">

        <div className="ml-60 mr-1 shadow-md mb-5 py-3 mt-6">

          <div className="px-6 py-2 text-lg font-medium text-gray-900 flex">
            <h1 className="mt-2 uppercase font-sans">Student Cards</h1>
            <span className="py-3 px-2 text-sm text-gray-300">120</span>
            <div className="ml-auto items-right mt-auto flex">
            <svg  width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="search_24px">
<path id="icon/action/search_24px" fillRule="evenodd" clipRule="evenodd" d="M14.9649 13.6704H15.7549L20.7449 18.3686L19.2549 19.7687L14.2549 15.0798V14.3375L13.9849 14.0744C12.8449 14.9953 11.3649 15.5497 9.75488 15.5497C6.16488 15.5497 3.25488 12.8153 3.25488 9.44197C3.25488 6.06865 6.16488 3.33429 9.75488 3.33429C13.3449 3.33429 16.2549 6.06865 16.2549 9.44197C16.2549 10.9548 15.6649 12.3455 14.6849 13.4167L14.9649 13.6704ZM5.25488 9.44197C5.25488 11.7817 7.26488 13.6704 9.75488 13.6704C12.2449 13.6704 14.2549 11.7817 14.2549 9.44197C14.2549 7.10226 12.2449 5.21358 9.75488 5.21358C7.26488 5.21358 5.25488 7.10226 5.25488 9.44197Z" fill="#EBD614"/>
</g>
</svg>

             <input
                type="text"
                placeholder="Search cards..."
                className="px-3 text-grey-darkest text-sm   italic focus:outline-none  "
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
                {peoples.map((person, index) => (
                  <tr className="hover:bg-gray-50" key={`${index}`}>
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
                      <span className="inline-flex px-2 text-xs font-semibold text-green-800 bg-green-100 rounded-full leading-5">
                        Active
                      </span>
                    </td>
                    <td className="flex px-8 py-4 whitespace-nowrap">
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
                    </td>

                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <a
                        href="#"
                        className="px-2 py-2 text-gray-600 shadow hover:text-indigo-900 "
                        onClick={openModal}>
                        View more
                      </a>
                    </td>
               
                  </tr>
                
                ))}
              </tbody>
            </table>
            <ViewStudent showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </div>
    </div>
    </div>
    </Fragment>
  );
}
