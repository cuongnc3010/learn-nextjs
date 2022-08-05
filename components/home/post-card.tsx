import { Post } from '@/models'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import moment from 'moment'
import * as React from 'react'
export interface PostCardProps {
  post: Post
}
export function PostCard({ post }: PostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Stack
          direction="row"
          my={2}
          divider={<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />}
        >
          <Typography variant="body1">
            {moment(Number(post.publishDate)).format('DD MMM yyyy')}
          </Typography>

          <Typography variant="body1">{post.tagList.join(', ')}</Typography>
        </Stack>

        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
