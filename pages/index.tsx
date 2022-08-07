import { SEO } from '@/components/common/seo'
import { FreaturedWorks, HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <SEO
        data={{
          title: 'Learn Nextjs | Cuongnc',
          description:
            'Step by step tutorial to build a full CRUD website using Nextjs for beginners ',
          url: 'https://cuongnc-learn-nextjs.vercel.app/',
          thumbnailUrl: 'https://miro.medium.com/max/700/1*htbUdWgFQ3a94PMEvBr_hQ.png',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FreaturedWorks />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
