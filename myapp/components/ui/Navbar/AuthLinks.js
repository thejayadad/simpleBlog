'use client'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const AuthLinks = ({user}) => {
  return (
    <div className='flex items-center gap-4'>
      {
        !user
        ? <div>
              <button 
              className='btn btn_login' 
              onClick={signIn}              
              >LogIn</button>
          </div>

          : <div className='flex items-center gap-4'>
            <Link href={`/profile${user?._id}`}>Profile</Link>
            <Link href={'/upload'}>UpLoad</Link>
            <img
            className='w-14 h-14 text-white p-2  rounded-full'
            alt='profile'
            src={user?.avatar}
            />
            <button
            onClick={() => signOut()}
            >signOut</button>

          </div>
      } 
    </div>
  )
}

export default AuthLinks