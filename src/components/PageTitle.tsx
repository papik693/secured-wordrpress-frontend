import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageTitle = ({ children }: Props) => {
  return <h2 className="text-2xl font-bold mb-6 text-white/90">{children}</h2>
}

export default PageTitle
