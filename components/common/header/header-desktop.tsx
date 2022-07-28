import { Box } from '@mui/material'
import * as React from 'react'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  return <Box display={{ xs: 'none', lg: 'block' }}>Header Desktop</Box>
}
