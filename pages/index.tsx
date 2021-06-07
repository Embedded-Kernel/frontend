import Head from "next/head";
import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <StudentCardList />
      </main>
    </Fragment>
  );
}
