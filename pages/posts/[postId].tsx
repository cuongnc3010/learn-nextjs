import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

export interface PostPageProps {
  post: any
}

export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter()
  if (!post) {
    return null
  }
  return (
    <div>
      <h2>Post Detail</h2>
      <h3>{post.title}</h3>
      <h4>{post.author}</h4>
      <p>{post.description}</p>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\n GET STATIC PATHS')
  const url = 'https://js-post-api.herokuapp.com/api/posts?_page=1'
  const res = await fetch(url)
  const posts = await res.json()
  const paths = posts.data.map((post: any) => ({
    params: { postId: post.id },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('\n GET STATIC PROPS', context.params?.postId)
  const postId = context.params?.postId
  //server side
  //build-time
  // console.log('static props')
  // if (!postId) {
  //   return notFound: true
  // }
  const url = `https://js-post-api.herokuapp.com/api/posts/${postId}`
  const res = await fetch(url)
  const post = await res.json()
  // console.log(posts)

  return {
    props: {
      post,
    },
  }
}
