import ky from 'ky'

export const api = ky.create({
  prefixUrl: `${import.meta.env.VITE_BACKEND_URL}/`,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const token = document.cookie
          .split('; ')
          .find((row) => row.startsWith('csrftoken'))
          ?.split('=')[1]

        request.headers.set('X-CSRFToken', token as string)
      },
    ],
  },
})
