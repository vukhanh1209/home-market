

export const LocalStorageEventTarget = new EventTarget()
export const SessionStorageEventTarget = new EventTarget();

export const clearLocalStorage = () => {
  localStorage.removeItem('profile')
  const clearLocalStorageEvent = new Event('clearLocalStorage')
  LocalStorageEventTarget.dispatchEvent(clearLocalStorageEvent)
}

export const clearSessionStorage = () => {
  sessionStorage.removeItem('customer_cart');
  const clearSessionStorageEvent = new Event('clearSessionStorage')
  SessionStorageEventTarget.dispatchEvent(clearSessionStorageEvent)
}

export const getCustomerCartFromSesstionStorage = () => {
  const result = sessionStorage.getItem('customer_cart')
  return result ? JSON.parse(result) : null
}

export const setCustomerCartFromSesstionStorage = (customerCart) => {
  sessionStorage.setItem('customer_cart', JSON.stringify(customerCart))
}


export const getProfileFromLocalStorage = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfileToLocalStorage = (profile) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
