import Head from "next/head";
import { Fragment } from "react";
import ViewStudent from "../components/modals/ViewStudent";
import StudentCardList from "../components/StudentCardList";
import SideBar from "../components/SideBar";
export default function Home() {
    return (
        <Fragment>
            <main>
                <SideBar />
                <StudentCardList />
            </main>
        </Fragment>
    );
}
