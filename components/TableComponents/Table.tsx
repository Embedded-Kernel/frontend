import React from "react";
import PropTypes from "prop-types";
import TablePaginationDemo from "../dataSource/tablePagination";

const Table = ({cols,data} : any) => {
    return(
    <table className=" divide-y divide-gray-200 min-w-max w-full table-auto">
         <thead className="bg-gray-100">
             <tr>
                 {cols.map((headerItem:any, index:any)=>(
                     <th  scope="col"
                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" key={index}>{headerItem.title}</th>
                 ))}
             </tr>
         </thead>
         <tbody className="bg-white w-4/5 text-sm text-gray-900">
             {data.map((item:any,index:any)=>(
                 <tr key={index} className="hover:bg-gray-50">
                     {cols.map((col:any,key:any)=>(
                         <td key={key} className="px-6 py-4 whitespace-nowrap">{col.render(item)}</td>
                     ))}
                 </tr>

             ))}
         </tbody>
      
    </table>
    )
}


Table.propTypes = {
    cols : PropTypes.array.isRequired,
    data : PropTypes.array.isRequired,
}




export default Table;