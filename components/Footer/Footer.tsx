import type { NextComponentType } from 'next'
import Link from 'next/link'
import FancyLink from '@/components/FancyLink'

const Footer: NextComponentType = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="grid grid-cols-[1fr_640px_1fr] bg-slate-200 bg-gradient-to-b from-slate-200 to-slate-400">
      <div className="col-start-2 col-end-3 flex items-center justify-between">
        <span className="text-xs font-bold">© {currentYear} produktywny.blog</span>
        <FancyLink
          href="/polityka-prywatnosci"
          className="text-xs font-bold text-primary focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-8 focus-visible:outline-rose-400"
        >
          Polityka prywatności
        </FancyLink>
      </div>
    </footer>
  )
}

export default Footer
