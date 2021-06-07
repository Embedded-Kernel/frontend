import Head from "next/head";
import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";
import LoginPage from "./LoginPage";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
     <StudentCardList/>
      </main>
    </Fragment>
  );
}
