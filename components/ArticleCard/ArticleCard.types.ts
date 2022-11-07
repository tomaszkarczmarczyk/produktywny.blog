import type { Frontmatter } from '@/lib/getFrontmatter'

export type ArticleProps = Frontmatter & {
  pathname: string
}
