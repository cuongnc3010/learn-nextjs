import { PostItem } from '@/components/blog'
import { MainLayout } from '@/components/layout'
import { getPostList } from '@/utils/posts'
import { Box, Container, Divider, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

export interface BlogListPageProps {
  posts: any[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <Typography variant="h3" fontWeight="bold" mt={5} mb={4}>
          Blog
        </Typography>
        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>
              <Divider sx={{ mt: { xs: 2.5, md: 4 }, mb: { xs: 2, md: 3 } }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
BlogListPage.Layout = MainLayout
export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  //server side
  //build-time

  /* convert markdownfile into list of javasript objects*/
  const postList = await getPostList()
  return {
    props: {
      posts: postList,
    },
  }
}
