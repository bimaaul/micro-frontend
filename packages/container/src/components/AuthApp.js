import React, { useRef, useEffect } from "react"
import { mount } from "auth/AuthApp"
import { useHistory } from "react-router-dom"
import { useAuth } from "./AuthProvider"

export default () => {
  const { onSignIn } = useAuth()
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) history.push(nextPathname)
      },
      onSignIn: onSignIn,
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}
