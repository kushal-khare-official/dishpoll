const SESSION_STORAGE_KEY = 'dishpoll'

export const getCurrentUser = () => {
  const userData = localStorage.getItem(SESSION_STORAGE_KEY)
  if (userData !== null) {
    return JSON.parse(userData)
  } else {
    return null
  }
}

export const setCurrentUser = (userData: any) => {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(userData))
}

export const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  setCurrentUser({
    firstName,
    lastName,
    email,
    password,
  })
}

export const login = async (email: string, password: string) => {
  setCurrentUser({
    email: email,
    password: password,
  })
  return {
    email: email,
    password: password,
  }
}

export const logout = () => {
  localStorage.removeItem(SESSION_STORAGE_KEY)
}
