import React, { useContext } from "react"
import NavContext from "../context/NavContext";
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout'
import Projects from './windows/Projects/Projects'
import Contact from "./windows/Contact/Contact";
import Resume from "./windows/Resume"
import NavItem from "./NavItem";

export default function App() {
  const {handleNav, nav} = useContext(NavContext)

  return (
    <>
      <Layout>
        <AnimatePresence>
          {!nav && 
          (<div className="flex flex-col gap-12 text-xl mt-auto
                md:flex-row md:justify-between mb-20 md:pt-10">

            <NavItem id='resume' />
            <NavItem id='projects' />
            <NavItem id='contact' />

          </div>)}
        </AnimatePresence>
      </Layout>
        
      <AnimatePresence>
        {(nav === "resume") && (<Resume/>)}
        {(nav === "projects") && (<Projects/>)}
        {(nav === "contact") && (<Contact/>)}
      </AnimatePresence>
    </>
  )
}
