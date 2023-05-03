import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

const PublicRoutes = ({ children }) => {
  const { userInfo } = useSelector((state) => state.userLogin)

  let location = useLocation()

  if (userInfo) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  return children
}

export default PublicRoutes