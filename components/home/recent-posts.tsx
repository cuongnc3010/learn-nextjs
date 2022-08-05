import { Post } from '@/models'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { PostCard } from './post-card'

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      publishDate: '1659691190985',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      publishDate: '1659691536400',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]
  return (
    <Box component="section" bgcolor="secondary.light" pb={4} pt={2}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent posts</Typography>
          <Link passHref href="/blog">
            <MuiLink sx={{ display: { xs: 'none', md: 'inline-block' } }} component="button">
              View all
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
