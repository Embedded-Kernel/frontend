import React, { Fragment } from "react";
import { StaticRouter as Router, Route,  Switch } from 'react-router-dom';
import ConfirmCode from "../components/ConfirmationCode";
import StudentCardList from "../components/StudentCardList";
import {TransactionsList} from "../components/TransactionsList";
import SignUpPage from "./register";


export default function Home() {
  return (

    <Fragment>
      <main>
        <Router>
      <Switch>
              <Route exact path='/' component={SignUpPage}></Route>
              <Route exact path='/transaction' component={TransactionsList}></Route>
              <Route exact path='/cards' component={StudentCardList}></Route>
              <Route exact path='/code' component={ConfirmCode}></Route>
            </Switch>

</Router>

    

      </main>
    </Fragment>
 
  );
}
