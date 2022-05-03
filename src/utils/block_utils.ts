import { LOGIN_TRIES_LIMIT } from "../config/firebase"

export const getTries = () => Number(localStorage.getItem('tries')) || 0

export const blockUser = () => {
  const tries = getTries()

  if (tries > LOGIN_TRIES_LIMIT - 1) {
    window.location.href = 'blocked.html'
  }
}

export const incrementTry = () => {
  const tries = getTries()

  localStorage.setItem('tries', `${tries + 1}`)

  blockUser()
}

export const resetTries = () => {
  localStorage.removeItem('tries')
  window.location.href = 'index.html'
}

