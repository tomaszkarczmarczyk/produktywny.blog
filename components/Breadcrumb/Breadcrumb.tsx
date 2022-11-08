import { BreadcrumbProps } from '@/components/Breadcrumb'
import FancyLink from '@/components/FancyLink'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="mt-10 grid grid-cols-[1fr_640px_1fr]">
      <ul className="col-start-2 col-end-3 flex">
        <li className="flex items-center">
          <FancyLink
            href="/"
            className="block focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          >
            <HomeIcon className="h-6 w-6 text-primary" />
          </FancyLink>
        </li>

        {items &&
          items.map(({ path, name }, index, { length }) => (
            <li className="flex items-center" key={path}>
              <ChevronRightIcon className="h-6 w-6 px-1 text-black" />
              {index === length - 1 ? (
                <span className="leading-none">{name}</span>
              ) : (
                <FancyLink
                  href={path}
                  className="leading-none text-primary focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                >
                  {name}
                </FancyLink>
              )}
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
