import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { getProfileFromLocalStorage } from '../utils/auth'


const initialAppContext = {

  // isVerify: getAccessTokenFromLocalStorage() !== '' ? '2' : getProfileFromLocalStorage() ? '1' : '0',
  isVerify: getProfileFromLocalStorage() ? '1' : '0',
  setIsVerify: () => null,

  profile: getProfileFromLocalStorage(),
  setProfile: () => null,

  reset: () => null
}

export const AppContext = createContext(initialAppContext)
const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState(initialAppContext.profile)

  const [isVerified, setIsVerified] = useState(initialAppContext.isVerify)
  // const [isVerified, setIsVerified] = useState('1')


  const reset = () => {
    setIsVerified('0')
    setProfile(null)
  }


  return (
    <AppContext.Provider
      value={{
        isVerified,
        setIsVerified,
        profile,
        setProfile,
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
