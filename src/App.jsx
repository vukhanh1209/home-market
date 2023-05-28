import './App.css'
import MainLayout from './layout/MainLayout'
import AdminLayout from './layout/AdminLayout'
import AccountLayout from './layout/AdminLayout'
import { Routes, Route } from 'react-router-dom'
import useRouteElement from './useRouteElement'
import { AppContext } from './context/app.context'
import { LocalStorageEventTarget } from './utils/auth'
import { useContext } from 'react'

function App() {
  const routeElements = useRouteElement()
  const { isVerified } = useContext(AppContext)
  console.log(isVerified)
  // useEffect(() => {
  //   LocalStorageEventTarget.addEventListener('clearLocalStorage', reset)
  //   return () => {
  //     LocalStorageEventTarget.removeEventListener('clearLocalStorage', reset)
  //   }
  // }, [reset])
    // return (
    //   <div>
    //   <Routes>
    //     <Route path='/' element={<MainLayout/>}/>
    //     <Route path='/' element={<AccountLayout/>}/>
    //   </Routes>
    //   </>
    // )
  return <div className='App'>{routeElements}</div>

}

export default App
