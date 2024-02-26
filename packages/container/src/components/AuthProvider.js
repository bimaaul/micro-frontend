import React, { useCallback, useContext, useState } from "react"

const AuthContext = React.createContext({
  isSignedIn: false,
  onSignIn: () => null,
  onSignOut: () => null,
})

const AuthContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleSignIn = useCallback(() => setIsSignedIn(true), [])
  const handleSignOut = useCallback(() => setIsSignedIn(false), [])

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: isSignedIn,
        onSignIn: handleSignIn,
        onSignOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { AuthContextProvider, useAuth }
export default AuthContextProvider
