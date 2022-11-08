import type { MobileMenuProps } from '@/components/MobileMenu'
import SocialMedia from '@/components/SocialMedia'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import getSiteMeta from '@/lib/getSiteMeta'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MobileMenu = ({ toggle, setToggle }: MobileMenuProps) => {
  const {
    navigation: { main: navigation },
  } = getSiteMeta
  const defaultLinkCLass =
    'text-4xl font-bold leading-none focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-8 focus-visible:outline-rose-400'
  const currentLinkClass = `${defaultLinkCLass} text-primary`
  const router = useRouter()
  const { pathname } = router

  useLockBodyScroll()

  return (
    <aside className="fixed inset-0 z-50 grid grid-rows-[80px_1fr_80px] bg-white/80 backdrop-blur">
      <header className="flex items-center px-10">
        <button
          onClick={() => setToggle(!toggle)}
          className="focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-2 focus-visible:outline-rose-400"
        >
          <XMarkIcon className="h-10 w-10 text-black" />
        </button>
      </header>

      {navigation && (
        <nav className="flex items-center px-10">
          <ul className="flex flex-col space-y-10">
            {navigation.map((link, index) => {
              const { path, name } = link

              return (
                <li className="flex items-center justify-start" key={index}>
                  <Link href={path} className={pathname === path ? currentLinkClass : defaultLinkCLass}>
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}

      <footer className="flex items-center space-x-5 px-10">
        <SocialMedia />
      </footer>
    </aside>
  )
}

export default MobileMenu
