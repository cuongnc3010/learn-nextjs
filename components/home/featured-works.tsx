import { Work } from '@/models'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { WorkList } from '../work'

export function FreaturedWorks() {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      createdAt: '1659691190985',
      updatedAt: '1659784593863',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/winterburn/image/upload/v1659774642/projects/learn-nextjs/item1_dkwwkj.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createdAt: '1659691536400',
      updatedAt: '1659784611899',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/winterburn/image/upload/v1659774669/projects/learn-nextjs/item2_qjth9k.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createdAt: '1659691536400',
      updatedAt: '1659784611899',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/winterburn/image/upload/v1659774674/projects/learn-nextjs/item3_ejhp7o.jpg',
    },
  ]
  return (
    <Box component="section" pb={4} pt={2}>
      <Container>
        <Typography variant="h5" sx={{ mb: 2 }} textAlign={{ xs: 'center', md: 'inherit' }}>
          Featured works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  )
}
