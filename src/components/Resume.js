import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from "gatsby-plugin-image"


export default function Resume({handleNav, toggleNav}) {

  const isOpen = toggleNav === "resume"

  const containerVariants = {
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
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  className={`outline outline-2 outline-black fixed flex flex-col top-20 md:top-24 bottom-0 left-0 right-0 bg-white text-black
  min-h-[100vh-32] overflow-x-clip overflow-y-scroll md:left-[5vw] md:w-[90vw]`}>
  
    <div className='flex justify-between align-middle p-6 bg-yellow border-b-2 border-black'>
      <div className={`text-3xl md:text-5xl font-bold`}>
        <h2 className='text-[#DDDDD3]'>RESUME</h2>
      </div>
      <div className='my-auto text-2xl cursor-pointer font-bold
        hover:opacity-50'
        id={null}
        onClick={handleNav}>✕
      </div>
    </div>
    <a  href="#"
          className='text-xl md:text-3xl px-6 py-4 hover:underline mb-[-px] border-b-2 border-black bg-slate-100 hover:bg-slate-200'
      >↓ Download PDF</a>
    <div>
      <StaticImage src="../assets/cv1.jpg" alt="cv1"/>
      <StaticImage src="../assets/cv2.jpg" alt="cv2"/>
    </div>
    
</motion.div>
  )
}

// ${isOpen ? 'translate-x-0' : 'translate-x-[-120%]'} ease-in-out duration-700 