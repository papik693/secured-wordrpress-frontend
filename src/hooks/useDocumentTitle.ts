import { useEffect } from 'react'

const BASE_TITLE = 'Wordpress Security'

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | ${BASE_TITLE}`
  }, [title])
}
