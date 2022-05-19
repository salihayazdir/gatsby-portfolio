import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Projects from '../components/Projects'

export default function Indexpage() {
  
  const [toggleProjects, setToggleProjects] = useState(true)
  
  const handleProjects = () => setToggleProjects(!toggleProjects)
  
  return (
<>
  <Layout isOpen={toggleProjects}>
    <div className="mt-28">
      <div>
        <p className=" text-right text-xl">
          Hi there.<br/>
          ️I am Salih, and this website is my<br/>
          introduction to Gatsby JS.<br/>
        </p>
        <div className="mt-14 flex gap-4 justify-end font-bold text-2xl text-right text-indigo-400
        md:mt-10">
          <a href="#">linkedin↗︎</a>
          <a href="#">behance↗︎</a>
          <a href="#">github↗︎</a>
        </div>
      </div>
    </div>
    <div className="my-28 flex flex-col gap-20 text-xl
          md:flex-row md:justify-between md:mt-auto md:mb-16 md:pt-10">
      <div>
        <h2 className="text-4xl underline font-bold flex-1 cursor-pointer text-rose-500"
        onClick={handleProjects}
        >Projects ↑</h2>
        <p className="mt-6">Click here to<br/>take a look at my work.</p>
      </div>
      <div>
        <h2 className="text-4xl underline font-bold flex-1"
        >Resume</h2>
        <p className="mt-6"><u>Download my resume. ↓</u><br/><br/>
        Up-to-date as of May 2022.</p>
      </div>      <div>
        <h2 className="text-4xl underline font-bold flex-1"
        >Contact</h2>
        <p className="mt-6">Send me an e-mail at:<br/><br/>
        <u>salihayazdir@gmail.com</u></p>
      </div>
    </div> 
    
  </Layout>
 
  <Projects handleProjects={handleProjects} isOpen={toggleProjects}/>

</>
  )
}
