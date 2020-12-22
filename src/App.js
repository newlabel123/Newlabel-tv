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
  SIgnup,
  SeriesDetails,
  Series,
} from './pages'

function App() {
  return (
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
          <Route exact path="/movies">
            <Singles />
          </Route>
          <Route exact path="/movies/:id">
            <SingleItemDetails />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <SIgnup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Wrapper>
    </ChakraProvider>
  )
}

export default App
