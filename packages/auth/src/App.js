import React from "react"
import { Switch, Route, Router } from "react-router-dom"
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles"
import SignIn from "./components/Signin"
import SingUp from "./components/Signup"

const generateClassName = createGenerateClassName({
  productionPrefix: "oa",
})

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SingUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
