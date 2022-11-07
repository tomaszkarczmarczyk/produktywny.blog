import type { PageHeaderProps } from '@/components/PageHeader'
import useGlobalContext from '@/hooks/useGlobalContext'
import { useEffect, useRef } from 'react'

const PageHeader = ({ title, description }: PageHeaderProps) => {
  const { setVisiblePageHeader } = useGlobalContext()
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisiblePageHeader(entry.isIntersecting)
      },
      { rootMargin: '-80px 0px 0px 0px' }
    )

    observer.observe(cachedRef)

    return () => observer.unobserve(cachedRef)
  })

  return (
    <header
      ref={ref}
      className="bg-clip col-span-full grid grid-cols-[1fr_640px_1fr] space-y-5 bg-primary pt-10 pb-20 text-center"
    >
      <h1 className="col-start-2 col-end-3 text-6xl font-bold text-white">{title}</h1>
      {description && <p className="col-start-2 col-end-3 text-xl font-bold text-white">{description}</p>}
    </header>
  )
}

export default PageHeader
