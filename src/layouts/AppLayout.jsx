import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout  = () => {
  return (
    <div>
      <div className='grid-background'> </div>
       <main className='min-h-screen container'>
        <Header/>
        <Outlet/>
       </main>  
       <div>
        <Footer/>
       </div>
    </div>
  )
}

export default AppLayout