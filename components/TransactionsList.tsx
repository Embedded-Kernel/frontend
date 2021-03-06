import React, { Fragment } from "react";
import { useState } from "react";
import Dropdown from "./Layouts/Dropdown";
import MetaData from "./MetaData";
import { NewTransaction } from "./modals/NewTransaction";
import SideBar from "./SideBar";
/* import Table from './TableComponents/Table'; */
/* import { transaction } from './TableComponents/transactData'; */
/* import { tableTConstants } from './TableComponents/TransactListConsts'; */

export const TransactionsList = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <Fragment>
      <MetaData title={"Transactions List"} />
      <SideBar />
      <div className="overflow-hidden">
        <div className="min-w-screen  flex items-center justify-center overflow-hidden">
          <div className="students w-full ml-50 mr-5 mb-5 py-3 -mt-4">
            <div className="ml-60 shadow-md mb-5 py-3 mt-6">
              <div className="px-6 py-2 text-lg font-medium text-gray-900 flex">
                <h1 className="mt-2 uppercase font-sans">Transactions</h1>
                <div className="ml-16 items-left mt-auto flex">
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="search_24px">
                      <path
                        id="icon/action/search_24px"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.9649 13.6704H15.7549L20.7449 18.3686L19.2549 19.7687L14.2549 15.0798V14.3375L13.9849 14.0744C12.8449 14.9953 11.3649 15.5497 9.75488 15.5497C6.16488 15.5497 3.25488 12.8153 3.25488 9.44197C3.25488 6.06865 6.16488 3.33429 9.75488 3.33429C13.3449 3.33429 16.2549 6.06865 16.2549 9.44197C16.2549 10.9548 15.6649 12.3455 14.6849 13.4167L14.9649 13.6704ZM5.25488 9.44197C5.25488 11.7817 7.26488 13.6704 9.75488 13.6704C12.2449 13.6704 14.2549 11.7817 14.2549 9.44197C14.2549 7.10226 12.2449 5.21358 9.75488 5.21358C7.26488 5.21358 5.25488 7.10226 5.25488 9.44197Z"
                        fill="#EBD614"
                      />
                    </g>
                  </svg>

                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="px-3 text-grey-darkest text-sm   italic focus:outline-none  "
                  />
                </div>
                <div className="ml-72">
                  <button
                    className="inline-flex bg-sideBarColor justify-center px-6  mr-6 rounded-md border border-gray-300  py-2 text-sm font-medium text-white  focus:outline-none"
                    onClick={openModal}
                  >
                    New Transaction
                  </button>
                  <NewTransaction
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                  <Dropdown />
                  {/* <DatePickerPage/>  */}
                </div>
              </div>

              {/* <div className="bg-white rounded my-6 mt-3"> */}
              {/*   <Table cols={tableTConstants()} data={transaction} /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
