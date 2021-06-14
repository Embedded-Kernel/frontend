// import Head from "next/head";
import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";
import SideBar from "../components/SideBar";
import accountInfoPage from "./accountInfoPage";
import TransactionsList from "../components/TransactionsList";
export default function Home() {
    return (
        <Fragment>
            <main>
               
            {/* <SideBar /> */}
            {/* <StudentCardList />  */}
            <TransactionsList/>
            </main>
        </Fragment>
    );
}
