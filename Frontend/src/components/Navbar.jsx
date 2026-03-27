import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className='flex justify-between p-6 shadow-lg'>
        <h1>LOGO</h1>
        <div className='flex gap-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar