import { Header } from '@/components/common/header'
import { AdminLayout, MainLayout } from '@/components/layout'
import { Box, Button, Typography } from '@mui/material'
// import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export interface AboutPageProps {}
// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()
  // console.log('About query:', JSON.stringify(router.query))
  const [postList, setPostList] = useState([])
  const page = router.query?.page || 1

  const handleClick = () => {
    router.push(
      {
        pathname: './about',
        query: {
          page: Number(page) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  // client side only
  useEffect(() => {
    if (!page) {
      return
    }
    ;(async () => {
      const res = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const posts = await res.json()
      setPostList(posts.data)
    })()
  }, [page])
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About page
      </Typography>
      <Button variant="contained" color="info" sx={{ p: 2, margin: 5 }}>
        some info
      </Button>
      <Header />
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Next page</button>
    </Box>
  )
}
AboutPage.Layout = AdminLayout

export async function getStaticProps() {
  console.log('get static props')
  return {
    props: {},
  }
}
// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
