import React, { lazy, Suspense, useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Loading from './component/Loading'

import path from './constants/path'
import { AppContext } from './context/app.context'

import MainLayout from './layout/MainLayout'
import AdminLayout from './layout/AdminLayout'
import AccountLayout from './layout/AccountLayout'
import ManageAccount from './container/UserPage/ManageAccount'
import MyOrder from './container/UserPage/MyOrder'
import MyPayment from './container/UserPage/MyPayment'


// const AdminPage = lazy(() => import('./container/AdminPage'))
const CartPage = lazy(() => import('./container/CartPage'))
const LogInPage = lazy(() => import('./container/LogInPage'))
const HomePage = lazy(() => import('./container/HomePage'))
const PlaceOrderPage = lazy(() => import('./container/PlaceOrderPage'))
const SearchPage = lazy(() => import('./container/SearchPage'))
const SignUpPage = lazy(() => import('./container/SignUpPage'))
const UserPage = lazy(() => import('./container/UserPage'))
const VerifyPage = lazy(() => import('./container/VerifyPage'))





function ProtectedRoute() {
  const { isVerified } = useContext(AppContext)
  return isVerified === '1' ? <Outlet /> : <Navigate to='/' />
}

function CustomerRoute() {
  const { isVerified } = useContext(AppContext)
  return isVerified === '0' ? <Outlet /> : <Navigate to='/' />
}

// function AdminRoute() {
//   const { isAdmin } = useContext(AppContext)
//   return isAdmin === '1' ? <Outlet /> : <Navigate to='/' />
// }

// function CheckVerify() {
//   const { isVerify } = useContext(AppContext)
//   return isVerify === '1' ? <Outlet /> : <Navigate to='/' />
// }

// function AllAccess() {
//   const { isVerify } = useContext(AppContext)
//   return isVerify !== '1' ? <Outlet /> : <Navigate to='/verify' />
// }

// function RejectRoute() {
//   const { isVerify } = useContext(AppContext)
//   return isVerify === '2' ? <Navigate to='/' /> : isVerify === '1' ? <Navigate to='/verify' /> : <Outlet />
// }

const useRouteElement = () => {
  const routeElements = useRoutes([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: path.home,
                element: (
                    <Suspense fallback={<Loading />}>
                       <HomePage/>
                    </Suspense>
                  )
            },
            {
                path: path.search,
                element: (
                    <Suspense fallback={<Loading />}>
                       <SearchPage/>
                    </Suspense>
                  )
            },
            {
                path: path.cart,
                element: (
                    <Suspense fallback={<Loading />}>
                       <CartPage/>
                    </Suspense>
                  )
            }
        ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <MainLayout />,
          children: [
            {
                path: path.user,
                element: (
                    <Suspense fallback={<Loading />}>
                       <UserPage/>
                    </Suspense>
                  ),
                children: [
                  {
                    path: path.user,
                    element: (
                      <Suspense fallback={<Loading />}>
                        <ManageAccount/>
                      </Suspense>
                    )
                  },
                  {
                    path: `${path.user}${path.order}`,
                    element: (
                      <Suspense fallback={<Loading />}>
                        <MyOrder/>
                      </Suspense>
                    )
                  },
                  {
                    path: `${path.user}${path.payment}`,
                    element: (
                      <Suspense fallback={<Loading />}>
                        <MyPayment/>
                      </Suspense>
                    )
                  }
                  
                ]
            },
            {
              path: path.placeOrder,
                    element: (
                      <Suspense fallback={<Loading />}>
                        <PlaceOrderPage/>
                      </Suspense>
                    )
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <CustomerRoute />,
      children: [
        {
          path: '',
          element: <AccountLayout />,
          children: [
            {
                path: path.login,
                element: (
                    <Suspense fallback={<Loading />}>
                       <LogInPage/>
                    </Suspense>
                  )
            },
            {
                path: path.register,
                element: (
                    <Suspense fallback={<Loading />}>
                       <SignUpPage/>
                    </Suspense>
                  )
            },
            {
              path: `${path.verify}`,
              element: (
                  <Suspense fallback={<Loading />}>
                     <VerifyPage/>
                  </Suspense>
                )
            }
          ]
        }
      ]
    }
  ])
  return routeElements
}

export default useRouteElement
