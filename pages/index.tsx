import { Fragment } from "react";
import { Route, StaticRouter as Router, Switch } from "react-router-dom";
import ConfirmCode from "../components/ConfirmationCode";
import StudentCardList from "../components/StudentCardList";
import {TransactionsList} from "../components/TransactionsList";
import SignUpPage from "./register";

export default function Home() {
  return (

    <Fragment>
      <main>
        <ConfirmCode/>
{/* <TransactionsList/> */}
        {/* <StudentCardList/> */}
      {/* <Switch>
          <Route exact path="/" component={SignUpPage} />
          <Route exact path="cards" component={StudentCardList} />
          <Route exact path="/transactions" component={TransactionsList} />
        </Switch> */}
      </main>
    </Fragment>
 
  );
}
