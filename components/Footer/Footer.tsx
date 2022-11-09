import type { NextComponentType } from 'next'
import Link from 'next/link'
import FancyLink from '@/components/FancyLink'
import SocialMedia from '@/components/SocialMedia'

const Footer: NextComponentType = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="grid grid-cols-[1fr_640px_1fr] bg-slate-200 bg-gradient-to-b from-slate-200 to-slate-400">
      <div className="col-start-2 col-end-3 flex items-center justify-between">
        <span className="text-xs font-bold">© {currentYear} produktywny.blog</span>
        <div className="flex items-center space-x-5">
          <div>
            <FancyLink
              href="/polityka-prywatnosci"
              className="focus-2 inline-block text-xs font-bold leading-none text-primary"
            >
              Polityka prywatności
            </FancyLink>
            {' | '}
            <FancyLink href="/o-blogu" className="focus-2 inline-block text-xs font-bold leading-none text-primary">
              O blogu
            </FancyLink>
            {' | '}
            <FancyLink
              href="mailto:tomasz@produktywny.blog"
              className="focus-2 inline-block text-xs font-bold leading-none text-primary"
            >
              Kontakt
            </FancyLink>
          </div>
          <div className="flex items-center space-x-3">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
