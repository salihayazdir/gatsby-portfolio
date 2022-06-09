import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.css'

export default function Layout(props) {
  return (

<div className='px-6 flex flex-col justify-between min-h-[100vh] overflow-clip max-w-[100vw]
md:px-[5vw]'>

    <Header isOpen={props.isOpen} handleNav={props.handleNav}/>
      {props.children}
    <Footer isOpen={props.isOpen}/>

</div>
  )
}
