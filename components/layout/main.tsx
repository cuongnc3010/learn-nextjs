import { LayoutProps } from '@/models'
import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/works">
        <a>Works</a>
      </Link>
      <Box component="main" flexGrow={1}>
        <Container maxWidth="sm" sx={{ bgcolor: 'secondary.main' }}>
          SX CONTAINER
        </Container>
        <Container sx={{ bgcolor: 'secondary.main' }}>MD CONTAINER</Container>

        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
