import React from 'react'
import Header from './Header'
import Footer from './Footer'


export default function Layout({children}) {

  return (
  <div className='px-6 flex flex-col justify-between min-h-[100vh] overflow-clip max-w-[100vw]
    md:px-[5vw]'>

      <Header/>
        {children}
      <Footer/>

  </div>
  )
}
