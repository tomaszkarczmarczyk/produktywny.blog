import getSiteMeta from '@/lib/getSiteMeta'
import useGlobalContext from '@/hooks/useGlobalContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

const defaultLinkCLass: string =
  'focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-[16px] focus-visible:outline-rose-400 relative z-10 font-bold uppercase text-white before:absolute before:left-1 before:right-1 before:-bottom-2 before:-z-10 before:h-0.5 before:origin-center before:translate-y-1 before:bg-white before:opacity-0 before:transition before:duration-200 before:content-[""] hover:before:translate-y-0 hover:before:opacity-100'
const currentLinkClass: string =
  'focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-[16px] focus-visible:outline-rose-400 relative z-10 font-bold uppercase text-white before:absolute before:left-1 before:right-1 before:-bottom-2 before:-z-10 before:h-0.5 before:bg-white before:content-[""]'

const Header = () => {
  const {
    navigation: { main: navigation },
  } = getSiteMeta
  const { visiblePageHeader } = useGlobalContext()
  const router = useRouter()
  const { pathname } = router

  return (
    <header
      className={`sticky top-0 z-40 flex items-center justify-between px-10 transition duration-200${
        visiblePageHeader ? ' bg-primary shadow-none' : ' bg-blue-800 shadow-lg'
      }`}
    >
      <figure>
        <Link
          href="/"
          className="text-4xl font-bold text-white focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-8 focus-visible:outline-rose-400"
        >
          produktywny.blog
        </Link>
      </figure>

      {navigation && (
        <nav>
          <ul className="flex space-x-10">
            {navigation.map((link, index) => {
              const { path, name } = link

              return (
                <li key={index}>
                  <Link href={path} className={pathname === path ? currentLinkClass : defaultLinkCLass}>
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
