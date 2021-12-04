const storage = {
  setToken(value) {
    // localStorage.setItem('token', JSON.stringify(value))
    localStorage.setItem('token', value)
  },
  getToken() {
    // return JSON.parse(localStorage.getItem('token'))
    return localStorage.getItem('token')
  },
  rmToken() {
    localStorage.removeItem('token')
  },
  set(key, value) {
    // sessionStorage.setItem(key, JSON.stringify(value))
    sessionStorage.setItem(key, value)
  },
  get(key) {
    return sessionStorage.getItem(key)
  },
  removeKey(key) {
    sessionStorage.removeItem(key)
  }
}

export default storage
