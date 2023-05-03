import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import AuthRoutes from './authRoutes'
import PublicRoutes from './publicRoutes'
import AdminRoutes from './adminRoutes'
import BrandScreen from '../screens/BrandScreen/BrandScreen'
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import ProductScreen from '../screens/ProductScreen/ProductScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import UsersScreen from '../screens/UsersScreen/UsersScreen'
import NotFoundScreen from '../screens/NotFoundScreen/NotFoundScreen'
import SalePiontScreen from '../screens/SalePointScreen/SalePointScreen'
import { ProductContextProvider } from '../contexts/ProductContext'
import NotificationScreen from '../screens/NotificationsScreen/NotificationScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          path='/profile'
          element={
            <AuthRoutes>
              <ProfileScreen />
            </AuthRoutes>
          }
        />
        <Route
          path='/'
          element={
            <AdminRoutes>
              <SalePiontScreen />
            </AdminRoutes>
          }
        />
        <Route
          path='/categories'
          element={
            <AdminRoutes>
              <CategoriesScreen />
            </AdminRoutes>
          }
        />
        <Route
          path='/notifications'
          element={
            <AdminRoutes>
              <NotificationScreen />
            </AdminRoutes>
          }
        />
        <Route
          path='/brands'
          element={
            <AdminRoutes>
              <BrandScreen />
            </AdminRoutes>
          }
        />
        <Route
          path='/products'
          element={
            <AdminRoutes>
              <ProductContextProvider>
                <ProductScreen />
              </ProductContextProvider>
            </AdminRoutes>
          }
        />
        <Route
          path='/users'
          element={
            <AdminRoutes>
              <UsersScreen />
            </AdminRoutes>
          }
        />
        <Route
          path='/sign-in'
          element={
            <PublicRoutes>
              <LoginScreen />
            </PublicRoutes>
          }
        />
        <Route
          path='/sign-up'
          element={
            <PublicRoutes>
              <SignUpScreen />
            </PublicRoutes>
          }
        />
        <Route
          path='/sale-point'
          element={
            <AuthRoutes>
              <SalePiontScreen />
            </AuthRoutes>
          }
        />
        <Route exact path='*' element={<NotFoundScreen />} />
      </Route>
    </Routes>
  )
}

export default App
