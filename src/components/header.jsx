import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
// import logo from '../assets/hirequesties.jpeg';


const Header = () => {
  return (
   <>
     <nav className='py-4 flex justify-between items-center'>
       <Link>
          <img src="/logo.png" className='h-20'/>
       </Link>
       <Button variant="outline">Login</Button>
     </nav>
   </>
  )
}

export default Header