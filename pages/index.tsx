import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";

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
