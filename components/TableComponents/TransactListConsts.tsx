import React from "react";
import { useState } from "react";
import { ViewStudent } from "../modals/ViewStudent";

export const tableTConstants = () => {

  return [
    {
      title: "Names",
      render: (rowData: any) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: "Activity",
      render: (rowData: any) => {
        return <span>{rowData.event}</span>;
      },
    },
    {
      title: "Amount",
      render: (rowData: any) => {
        return <span>{rowData.amount}</span>;
      },
    },
    {
      title: "Initial Balance",
      render: (rowData: any) => {
        return <span>{rowData.initialBal}</span>;
      },
    },
    {
      title: "New Balance",
      render: (rowData: any) => {
        return <span>{rowData.newBal}</span>;
      },
    },
    {
        title: "Date",
        render: (rowData: any) => {
          return <span>{rowData.date}</span>;
        },
      },
    
   
  ];
};
