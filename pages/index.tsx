import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  return <Box component="h2">Home Page</Box>
}
Home.Layout = MainLayout
export default Home
