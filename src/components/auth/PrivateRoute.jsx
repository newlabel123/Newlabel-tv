import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { AuthContext } from '../../context/auth'

function PrivateRoute({ path, exact, children }) {
  const { authState } = useContext(AuthContext)

  // Check is user is logged in
  if (!authState.jwt) {
    return <Redirect to="/login" />
  }

  // Check if token is expired
  const { exp } = jwtDecode(authState.jwt)
  if (Date.now() >= exp * 1000) {
    return <Redirect to="/login" />
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  )
}

export { PrivateRoute }
