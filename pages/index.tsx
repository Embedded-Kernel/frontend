import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1 className="text-6xl text-center">Hello from embeded Kernel</h1>
      </main>
    </Fragment>
  );
}
