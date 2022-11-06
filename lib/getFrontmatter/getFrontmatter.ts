import type { Path, File, Frontmatter } from '@/lib/getFrontmatter'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const getFrontmatter = (path: Path, file: File) => {
  const source = matter(readFileSync(join(process.cwd(), ...path, file), 'utf-8'))
  const { data } = source
  const pathname = `/${path.at(-1)}/${file.replace(/\.mdx$/, '')}`
  return { ...(data as Frontmatter), pathname }
}

export default getFrontmatter
