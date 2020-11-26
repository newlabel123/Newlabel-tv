import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Switch,
  Route
} from 'react-router-dom'

import { theme } from './theme'
import { Wrapper } from './components/layout'
import { Home, MovieDetails, Movies, Profile, TvShowDetails, TvShows } from './pages'

function App () {
  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/series">
              <TvShows />
            </Route>
            <Route exact path="/series/:id">
              <TvShowDetails />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
      </Wrapper>
    </ChakraProvider>
  )
}

export default App
