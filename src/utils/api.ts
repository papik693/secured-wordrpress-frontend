import ky from 'ky'

export const api = ky.create({
  prefixUrl: `${import.meta.env.VITE_BACKEND_URL}/`,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})
