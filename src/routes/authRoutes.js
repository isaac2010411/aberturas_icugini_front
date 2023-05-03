import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

const AuthRoutes = ({ children }) => {
  const { userInfo } = useSelector((state) => state.userLogin)

  let location = useLocation()

  if (!userInfo) {
    return <Navigate to='/sign-in' state={{ from: location }} replace />
  }

  return children
}

export default AuthRoutes