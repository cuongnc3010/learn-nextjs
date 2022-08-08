import { Work } from '@/models'
import { Box, Divider } from '@mui/material'
import React, { Fragment } from 'react'
import { WorkCard } from './work-card'

export interface WorkListProps {
  workList: Work[]
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: { xs: 2, md: 3 } }}></Divider>
        </Fragment>
      ))}
    </Box>
  )
}
