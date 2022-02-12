import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppContextProvider } from '../context/AppContext'
import { MenuContextProvider } from '../context/MenuContext'
import RouteWrapper from './RouteWrapper'
import { SleepScreen, ScrollToTop } from '../components'
import { Home, Portfolio, ProjectInfo, Blog, PostInfo, TagInfo, About, NotFound } from '../containers'
import { theme, GlobalStyle, Background } from '../shared'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <MenuContextProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Background />
              <SleepScreen />
              <ScrollToTop />

              <Routes>
                <Route
                  path='/'
                  element={
                    <RouteWrapper isHome>
                      <Home />
                    </RouteWrapper>
                  }
                />

                <Route
                  path='portfolio'
                  element={
                    <RouteWrapper>
                      <Portfolio />
                    </RouteWrapper>
                  }
                />

                <Route
                  path='portfolio/:slug'
                  element={
                    <RouteWrapper hasArrow>
                      <ProjectInfo />
                    </RouteWrapper>
                  }
                />

                <Route
                  path='blog'
                  element={
                    <RouteWrapper>
                      <Blog />
                    </RouteWrapper>
                  }
                />

                <Route
                  path='blog/:slug'
                  element={
                    <RouteWrapper hasArrow isPost>
                      <PostInfo />
                    </RouteWrapper>
                  }
                />

                <Route
                  path='blog/tag/:slug'
                  element={
                    <RouteWrapper>
                      <TagInfo />
                    </RouteWrapper>
                  }
                />

                <Route
                  path='about'
                  element={
                    <RouteWrapper>
                      <About />
                    </RouteWrapper>
                  }
                />

                <Route
                  path='/*'
                  element={
                    <RouteWrapper>
                      <NotFound />
                    </RouteWrapper>
                  }
                />
              </Routes>
            </BrowserRouter>
          </MenuContextProvider>
        </AppContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
