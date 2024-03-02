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
import { Login } from './containers/Login/Login'
import NavigationBar from './containers/Navigation/Navigation'

type PrivateRouteProps = {
  element: React.ReactNode
}

function App() {
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
                path="/dashboard"
                element={<PrivateRoute element={<Dashboard />} />}
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
