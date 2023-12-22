import { getPosts } from '@/lib/data'
import React from 'react'

const PostPage = async () => {
    const res = await getPosts({page:'home'})
    console.log("PostPage " + res)
  return (
    <section className='px-4 py-12'>
        postPage
    </section>
  )
}

export default PostPage