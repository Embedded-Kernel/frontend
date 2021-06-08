import Head from "next/head";
import { Fragment } from "react";
import ViewStudent from "../components/modals/ViewStudent";
import StudentCardList from "../components/StudentCardList";
import LoginPage from "./LoginPage";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <ViewStudent/>
     <StudentCardList/>
      </main>
    </Fragment>
  );
}
