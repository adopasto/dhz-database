import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import { Layout } from './components/Layout'
import Dashboard from './containers/Dashboard/Dashboard'
import { Login } from './containers/Login/Login'
import NavigationBar from './containers/Navigation/Navigation'

type PrivateRouteProps = {
  element: React.ReactNode
}

function App() {
  const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    // Add your authentication logic here
    const isAuthenticated = true // Replace with your actual authentication check

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

  //  Make login StandAlone
  return (
    <Router>
      <Layout
        leftItem={<NavigationBar />}
        rightItem={
          <Routes>
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
            <Route path="/*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        }
      />
    </Router>
  )
}

export default App
