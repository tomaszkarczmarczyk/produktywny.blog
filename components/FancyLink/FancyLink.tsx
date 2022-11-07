import Link from 'next/link'
import type { FancyLinkProps } from '@/components/FancyLink'

const FancyLink = ({ children, href, nofollow, className }: FancyLinkProps) => {
  return href.match(/^https?:\/\//) ? (
    <a href={href} target="_blank" rel={`noreferrer noopener${nofollow ? ' nofollow' : ''}`} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default FancyLink
