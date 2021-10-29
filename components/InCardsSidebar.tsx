import React, { Fragment } from 'react';
import MetaData from './MetaData';
export function InactiveCardsSidebar(){
return (
<Fragment>
    <MetaData title={'Inactive Cards Sidebar'} />
    <div className=" w-1/4">
        <div className="p-8 bg-white rounded shadow-md">
            <div className="pt-3 pb-4 ">
                <div className="flex justify-between">
                    <h2 className="text-sm font-bold mr-4 text-blue-800 mb-8">Activate</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>

                <div className="block bg-white py-3  border-t">
                    <div className="border-t">
                        <div className="px-4 py-2 flex  mt-4  space-x-8 justify-between">
                            <input type="checkbox" defaultChecked />
                            <span className="text-sm font-semibold  text-gray-900">EE456789001</span>
                            <a href="#"> <span className="text-sm font-semibold text-blue-600">Activate</span></a>
                            <span className="text-sm font-semibold text-gray-600">...</span>
                        </div>
                    </div>


                </div>
                <div className="block bg-white py-3 border-t">
                    <div className="px-4 py-2 flex   space-x-8 justify-between">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm font-semibold text-gray-900">EE456789001</span>
                        <a href="#"> <span className="text-sm font-semibold text-blue-600">Activate</span></a>
                        <span className="text-sm font-semibold text-gray-600">...</span>
                    </div>

                </div>
                <div className="block bg-white py-3 border-t">
                    <div className="px-4 py-2 flex   space-x-8 justify-between">
                        <input type="checkbox" />
                        <span className="text-sm font-semibold text-gray-900">EE456789001</span>
                        <a href="#"> <span className="text-sm font-semibold text-blue-600">Activate</span></a>
                        <span className="text-sm font-semibold text-gray-600">...</span>
                    </div>

                </div>
                <div className="block bg-white py-3 border-t">
                    <div className="px-4 py-2 flex   space-x-8 justify-between">
                        <input type="checkbox" />
                        <span className="text-sm font-semibold text-gray-900">EE456789001</span>
                        <a href="#"> <span className="text-sm font-semibold text-blue-600">Activate</span></a>
                        <span className="text-sm font-semibold text-gray-600">...</span>
                    </div>

                </div>
                <div className="block bg-white py-3 border-t">
                    <div className="px-4 py-2 flex   space-x-8 justify-between">
                        <input type="checkbox" />
                        <span className="text-sm font-semibold text-gray-900">EE456789001</span>
                        <a href="#"> <span className="text-sm font-semibold text-blue-600">Activate</span></a>
                        <span className="text-sm font-semibold text-gray-600">...</span>
                    </div>

                </div>
                <div className="block bg-white py-3 border-t">
                    <div className="px-4 py-2 flex   space-x-8 justify-between">
                        <input type="checkbox" />
                        <span className="text-sm font-semibold text-gray-900">EE456789001</span>
                        <a href="#"> <span className="text-sm font-semibold text-blue-600">Activate</span></a>
                        <span className="text-sm font-semibold text-gray-600">...</span>
                    </div>

                </div>
                <div className="block bg-white py-3 border-t">
                    <div className="px-4 py-2 flex   space-x-8 justify-between">
                        <input type="checkbox" />
                        <span className="text-sm font-semibold text-gray-900">EE456789001</span>
                        <a href="#"> <span className="text-sm font-semibold text-blue-600">Activate</span></a>
                        <span className="text-sm font-semibold text-gray-600">...</span>
                    </div>

                </div>
                <div className="mt-4  ml-12">
                    <button type="submit"
                        className="py-2 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 ">
                        Load more
                    </button>
                </div>

            </div>
        </div>
    </div>

</Fragment>
)
}