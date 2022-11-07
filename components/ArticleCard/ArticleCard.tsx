import Link from 'next/link'
import type { ArticleProps } from '@/components/ArticleCard'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const ArticleCard = ({ title, description, pathname }: ArticleProps) => {
  return (
    <article className="relative col-start-2 col-end-3 space-y-5">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <p>{description}</p>
      <footer>
        <Link
          href={pathname}
          className="inline-flex items-center justify-start space-x-2 before:absolute before:inset-0 before:content-[''] focus-visible:rounded focus-visible:outline-none focus-visible:outline-offset-8 focus-visible:outline-rose-400"
        >
          <span className="font-bold">Czytaj dalej</span>
          <ArrowRightIcon className="h-6 w-6 text-primary" />
        </Link>
      </footer>
    </article>
  )
}

export default ArticleCard
