import { Work } from '@/models'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

export interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          width={246}
          height={184}
          layout="responsive"
          alt="work thumbsnail"
        />
      </Box>

      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" mt={2} mb={3} fontSize={{ xs: '16px', md: '24px' }}>
          <Chip
            color="secondary"
            label={new Date(Number.parseInt(work.createdAt)).getFullYear()}
            size="small"
            sx={{ fontWeight: 'bold' }}
          />
          <Typography ml={4} color=" #8695A4">
            {work.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
