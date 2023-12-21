import Logo from '@/components/logo/Logo'
import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'
import SearchForm from '@/components/Forms/SearchForm/SearchForm'

const Navbar = async () => {
  const user = await getServerUser();
console.log(user)
  return (
    <header className='px-4 py-12'>
        <nav className='flex items-center justify-between mx-auto max-w-screen-xl'>
        <Logo />
        <SearchForm />
        <AuthLinks  user={user}  />
        </nav>
    </header>
  )
}

export default Navbar