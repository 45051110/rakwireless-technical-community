import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setName(name) {
  return Cookies.set('username', name)
}
export function getName() {
  return Cookies.get('username')
}
export function setRole(role) {
  return Cookies.set('role', role)
}
export function getRole() {
  return Cookies.get('role')
}
