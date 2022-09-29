import { Navigate, useLocation } from 'react-router-dom'

const SESSION_STORAGE_KEY = 'dishpoll'

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()

  const userData = localStorage.getItem(SESSION_STORAGE_KEY)

  if (!userData) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export default AuthRoute
