import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
  // console.log(`posts: ${posts}`)
  return (
    <>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  //server side
  //build-time
  // console.log('static props')

  const url = 'https://js-post-api.herokuapp.com/api/posts?_page=1'
  const res = await fetch(url)
  const posts = await res.json()
  // console.log(posts)

  return {
    props: {
      posts: posts.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}
