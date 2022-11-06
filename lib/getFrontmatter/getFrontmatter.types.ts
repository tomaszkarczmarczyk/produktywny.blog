export type Path = string[]
export type File = string
export type Frontmatter = {
  title: string
  description: string
  date: {
    createdAt: string
    updatedAt: string
  }
  author: string
  isPublished: boolean
}
