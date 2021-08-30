import { Fragment } from "react";
import StudentCardList from "../components/StudentCardList";
import {TransactionsList} from "../components/TransactionsList";
import SignUpPage from "./register";

export default function Home() {
  return (
    <Fragment>
      <main>
        {/* <SideBar /> */}
        {/* <StudentCardList /> */}
     <TransactionsList/> 
        {/* <SignUpPage/> */}
      </main>
    </Fragment>
  );
}