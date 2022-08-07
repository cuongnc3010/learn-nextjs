import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Icon, Stack, Typography } from '@mui/material'
import * as React from 'react'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Instagram, url: 'https://instagram.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: LinkedIn, url: 'https://linkedin.com' },
  ]
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((link, index) => (
          <Box
            component="a"
            key={index}
            p={2}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={link.icon} fontSize="large" sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  )
}
