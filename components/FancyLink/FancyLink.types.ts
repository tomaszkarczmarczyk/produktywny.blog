import { ReactNode } from 'react'

export type FancyLinkProps = {
  children: ReactNode
  href: string
  nofollow?: boolean
  className?: string
}
