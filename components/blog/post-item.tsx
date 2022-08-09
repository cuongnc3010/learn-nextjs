import { Post } from '@/models'
import { Box, Divider, Stack, Typography } from '@mui/material'
import moment from 'moment'
import * as React from 'react'

export interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Stack
        direction="row"
        my={2}
        divider={<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />}
      >
        <Typography variant="body1">
          {moment(new Date(post.publishDate)).format('DD MMM yyyy')}
        </Typography>

        <Typography variant="body1">{post.tagList.join(', ')}</Typography>
      </Stack>

      <Typography variant="body2">{post.description}</Typography>
    </Box>
  )
}
