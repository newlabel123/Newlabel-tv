import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Switch, Route } from 'react-router-dom'

import { theme } from './theme'
import { Wrapper } from './components/layout'
import {
  Home,
  Login,
  SingleItemDetails,
  Singles,
  Profile,
  Signup,
  SeriesDetails,
  Series,
} from './pages'
import { AuthContextProvider } from './context/auth'
import { PrivateRoute } from './components/auth/PrivateRoute'

function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/series">
              <Series />
            </Route>
            <Route exact path="/series/:id">
              <SeriesDetails />
            </Route>
            <Route exact path="/singles">
              <Singles />
            </Route>
            <Route exact path="/singles/:id">
              <SingleItemDetails />
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Wrapper>
      </ChakraProvider>
    </AuthContextProvider>
  )
}

export default App
