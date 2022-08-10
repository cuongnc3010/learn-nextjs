import { Box, Container, Divider } from '@mui/material'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Script from 'next/script'
import { unified } from 'unified'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkPrism from 'remark-prism'

import '../../public/prism.js'
import { Post } from '@/models'
import { getPostList } from '@/utils/posts'

export interface BlogPageProps {
  post: Post
}

export default function BlogDetailPage({ post }: BlogPageProps) {
  if (!post) {
    return null
  }
  return (
    <Box>
      <Container>
        <h2>Post Detail Page</h2>
        <h3>{post.title}</h3>
        <h4>{post.author?.name} </h4>
        <p>{post.description}</p>

        <Divider />

        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList()
  const paths = postList.map((post: Post) => ({
    params: { slug: post.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList()
  const slug = context.params?.slug
  if (!slug) {
    return { notFound: true }
  }
  const post = postList.find((x) => x.slug === slug)
  if (!post) {
    return { notFound: true }
  }
  //server side
  //build-time

  /*parse markdown to html*/
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'Agenda.*' })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog Detail Page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '')
  post.htmlContent = file.toString()
  return {
    props: {
      post,
    },
  }
}
