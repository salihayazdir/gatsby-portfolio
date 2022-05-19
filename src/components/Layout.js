import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.css'

export default function Layout(props) {
  return (

<div className='mx-6 flex flex-col min-h-[100vh] overflow-clip max-w-[100vw]
md:mx-[5vw] text-[#eeeeee]'>

    <Header isOpen={props.isOpen}/>
      {props.children}
    <Footer/>

    {/* background */}
      {/* <div className='-z-10'>
        <div className="egg1 opacity-20"></div>
        <div className="egg2 opacity-20"></div>
      </div> */}
    {/* background */}

</div>
  )
}
