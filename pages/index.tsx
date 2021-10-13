import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";
import {TransactionsList} from "../components/TransactionsList";
import LangingPage from "./landing";
import LoginPage from "./login";
import SignUpPage from "./register";

export default function Home() {
  return (
    <Fragment>
      <main>
        {/* <SideBar /> */}
        {/* <StudentCardList /> */}
     <LangingPage/> 
        {/* <SignUpPage/> */}
      </main>
    </Fragment>
  );
}