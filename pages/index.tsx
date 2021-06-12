import Head from "next/head";
import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";
import SideBar from "../components/SideBar";
import accountInfoPage from "./accountInfoPage";
export default function Home() {
    return (
        <Fragment>
            <main>
               
            {/* <SideBar /> */}
            <StudentCardList /> 
            </main>
        </Fragment>
    );
}
