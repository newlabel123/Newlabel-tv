import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  Player,
} from './pages'
import { AuthContextProvider } from './context/auth'
import { PrivateRoute } from './components/auth/PrivateRoute'
import { LocationContextProvider } from './context/location'

function App() {
  return (
    <AuthContextProvider>
      <LocationContextProvider>
        <ToastContainer />
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
              <Route exact path="/player">
                <Player />
              </Route>
            </Switch>
          </Wrapper>
        </ChakraProvider>
      </LocationContextProvider>
    </AuthContextProvider>
  )
}

export default App
