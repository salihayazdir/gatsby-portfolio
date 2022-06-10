import React, { useState, useContext } from 'react'
import NavContext from '../../context/NavContext'
import { motion } from 'framer-motion'

function Window({children, title}) {
    const {handleNav, nav} = useContext(NavContext)
    const isOpen = nav === "contact"

    const variants = {
    hidden: {
        y: "100vh",
    },
    visible: { 
        y: 0,
        transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }
    },
    exit: {
        opacity: 0,
        y: "50vh",
        transition: { ease: 'easeInOut', duration: 0.3 }
    }
    }
  
  return (
    <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`outline outline-2 outline-black fixed flex flex-col top-20 md:top-24 bottom-0 left-0 right-0 bg-white text-black
        min-h-[100vh-32] overflow-x-clip overflow-y-scroll md:left-[5vw] md:w-[90vw]`}>
    
        <div className='flex justify-between align-middle p-6 bg-yellow border-b-2 border-black'>
            <div className={`text-3xl md:text-5xl font-bold`}>
            <h2 className='text-[#DDDDD3]'>{title}</h2>
            </div>
            <div className='my-auto text-2xl cursor-pointer font-bold
            hover:opacity-50'
            onClick={handleNav}>✕</div>
        </div>
        
        {children}

    </motion.div>
  )
}

export default Window