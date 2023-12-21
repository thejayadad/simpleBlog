import Logo from '@/components/logo/Logo'
import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'

const Navbar = async () => {
  const user = await getServerUser();
console.log(user)
  return (
    <header className='px-4 py-12'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
        <Logo />
        <AuthLinks user={user} />
        </nav>
    </header>
  )
}

export default Navbar