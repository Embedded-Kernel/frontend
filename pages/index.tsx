import Head from "next/head";
import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";
import SideBar from "../components/SideBar";
export default function Home() {
    return (
        <Fragment>
            <main>
            <StudentCardList />
                <SideBar />
        
            </main>
        </Fragment>
    );
}
