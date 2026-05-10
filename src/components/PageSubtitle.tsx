import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageSubtitle = ({ children }: Props) => {
  return <p className="max-w-xl mb-6 font-semibold text-white/60">{children}</p>
}
export default PageSubtitle
