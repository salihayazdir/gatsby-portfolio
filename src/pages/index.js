import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Arrow from "../assets/Arrow"
import Resume from "../components/Resume"
import Contact from "../components/Contact"



export default function Indexpage() {  
  const [toggleNav, setToggleNav] = useState(null)
  const handleNav = (event) => setToggleNav(event.target.id)

  const navStyles = "text-4xl md:text-6xl underline font-bold flex-1 cursor-pointer text-[#F64D00]"
  const navContainerStyles = "relative min-h-40"
  const navVariants = {
    initial: {
      y:50,
      opacity: 0,
    },
    animate: {
      y:0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1
      }
    },
    exit: {
      opacity: 0,
      y:-50,
      transition: {duration: 0.3,}
    }
  }


  return (
<>
  <Layout isOpen={toggleNav} handleNav={handleNav}>
  <AnimatePresence>
  {/* <div>
    <div className='h-10 w-full bg-[#77967A]'></div>
    <div className='h-8 w-full bg-[#5E4658]'></div>
    <div className='h-6 w-full bg-[#FF8D04]'></div>
    <div className='h-4 w-full bg-[#285551]'></div>
    <div className='h-2 w-full bg-[#7FB6B7]'></div>
  </div> */}
    {!toggleNav && 
    (<div className="flex flex-col gap-12 text-xl mt-auto
          md:flex-row md:justify-between mb-20 md:pt-10">
      
      <div className={navContainerStyles}>
        <motion.h2 variants={navVariants} initial="initial" animate="animate" exit="exit"
              className={navStyles}
              id="resume"
              onClick={handleNav}
              >RESUME
        </motion.h2>
        {/* <Arrow color="#ffffff" style={`absolute -bottom-10 right-0 h-60 opacity-30 pointer-events-none rotate-90`}/> */}
      </div>
      
      <div className={navContainerStyles}>
        <motion.h2 variants={navVariants} initial="initial" animate="animate" exit="exit"
              className={navStyles} 
              id="projects"
              onClick={handleNav}
              >PROJECTS
        </motion.h2>
        {/* <Arrow color="#ffffff" style={`absolute -bottom-10 h-60 opacity-30 pointer-events-none left-8`}/> */}
      </div>
      
      <div className={navContainerStyles}>
        <motion.h2 variants={navVariants} initial="initial" animate="animate" exit="exit"
              className={navStyles}
              id="contact"
              onClick={handleNav}
              >CONTACT
        </motion.h2>
        {/* <Arrow color="#ffffff" style={`absolute -bottom-10 h-60 opacity-30 pointer-events-none -rotate-90`}/> */}
      </div>

    </div>)}
  </AnimatePresence>
  </Layout>

  <AnimatePresence>
    {(toggleNav === "resume") && (<Resume handleNav={handleNav} toggleNav={toggleNav}/>)}
    {(toggleNav === "projects") && (<Projects handleNav={handleNav} toggleNav={toggleNav}/>)}
    {(toggleNav === "contact") && (<Contact handleNav={handleNav} toggleNav={toggleNav}/>)}
  </AnimatePresence>
</>
  )
}
