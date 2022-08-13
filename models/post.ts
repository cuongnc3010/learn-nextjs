export interface Author {
  name: string
  title: string
  profileUrl: string
  avatarUrl: string
}

export interface Post {
  id: string | number
  title: string
  publishDate: string
  tagList: string[]
  description: string
  thumbnailUrl?: string
  slug: string
  author?: Author
  mdContent?: string
  htmlContent?: string
}
