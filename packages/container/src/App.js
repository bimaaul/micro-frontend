import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/core"

import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import AuthContextProvider, { useAuth } from "./components/AuthProvider"

const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
})

export default () => {
  return (
    <Providers>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Providers>
  )
}

const Providers = ({ children }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </StylesProvider>
  )
}
