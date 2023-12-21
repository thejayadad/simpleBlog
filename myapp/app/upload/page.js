import React from 'react'
import { addPost } from '@/lib/actions'

const UpLoad = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <form
      className='flex flex-col'
      action={addPost}
      >
      <input type="text" placeholder="Title..." name="title" required />
      <input type="text" placeholder="Image" name="imgUrl" required />
      <input type="text" placeholder="Draft" name="draft" required />
    <button
    type='submit'
    >Submit</button>
      </form>
    </div>
  )
}

export default UpLoad