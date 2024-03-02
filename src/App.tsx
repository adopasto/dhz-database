import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Layout } from './components/Layout'
import NotFound from './components/NotFound'
import Dashboard from './containers/Dashboard/Dashboard'
import Dhzo from './containers/Dhzo/Dhzo'
import { Login } from './containers/Login/Login'
import NavigationBar from './containers/Navigation/Navigation'
import Profile from './containers/Profile/Profile'
import Technika from './containers/Technika/Technika'
import Vybor from './containers/Vybor/Vybor'
import ZoznamClenov from './containers/ZoznamClenov/ZoznamClenov'

type PrivateRouteProps = {
  element: React.ReactNode
}

function App() {
  // TODO: create header bar -> logo on the left ?/right + some info buttons ? settings? -> resolve .
  const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    // Add  authentication logic here
    const isAuthenticated = true

    return isAuthenticated ? (
      <>{element}</>
    ) : (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: window.location.pathname }}
      />
    )
  }
  const theme = createTheme()

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout
          leftItem={<NavigationBar />}
          rightItem={
            <Routes>
              <Route
                path="/zakladnyPrehlad"
                element={<PrivateRoute element={<Dashboard />} />}
              />
              <Route
                path="/technika"
                element={<PrivateRoute element={<Technika />} />}
              />
              <Route
                path="/vybor"
                element={<PrivateRoute element={<Vybor />} />}
              />
              <Route
                path="/zoznamClenov"
                element={<PrivateRoute element={<ZoznamClenov />} />}
              />
              <Route
                path="/profil"
                element={<PrivateRoute element={<Profile />} />}
              />
              <Route
                path="/dhzo"
                element={<PrivateRoute element={<Dhzo />} />}
              />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          }
        />
      </ThemeProvider>
    </Router>
  )
}

export default App
