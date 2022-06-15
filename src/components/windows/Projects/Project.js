import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { richTextOptions } from './richTextOptions'
import { TbArrowUpRight } from 'react-icons/tb';

export default function Project(
    {viewProject, slug, i, activeProject, name, desc, liveurl, github, behance, thumbnail, content }) {
    const isViewed = (slug) => (activeProject === slug)

    const linkHandler = (e) => e.stopPropagation()

    return (
        <AnimateSharedLayout>
        {
        (!activeProject || isViewed(slug))
        && 
        (
        <motion.li layout 
            onClick={() => viewProject(slug)}
            key={i} id={slug}
            className={`outline outline-2 outline-black bg-white 
            ${activeProject ? 
              'md:grid md:col-span-3 md:grid-cols-3' : 
              'hover:bg-slate-100 cursor-pointer group'}`}>

          <motion.div layout className={`p-6`}>
            <motion.h2 layout className={`text-4xl font-bold group-hover:underline`}>{name}</motion.h2>
            <motion.p layout className='text-slate-500 mt-2'>{desc}</motion.p>
            <motion.div layout className='flex flex-wrap gap-6 mt-8 mb-4'>
              {liveurl && 
                (<a onClick={linkHandler} target="_blank" rel="noopener noreferrer" href={liveurl}
                className='solidshadow tracking-wider bg-white font-bold py-2 px-4 border-2 border-black flex-shrink-0
                  hover:bg-black hover:text-white'>
                LIVE <TbArrowUpRight size='24' className='inline pb-[3px]'/>
              </a>)}
              {github && 
                (<a onClick={linkHandler} target="_blank" rel="noopener noreferrer" href={github}
                className='solidshadow tracking-wider bg-white font-bold py-2 px-4 border-2 border-black flex-shrink-0
                  hover:bg-black hover:text-white'>
                GITHUB <TbArrowUpRight size='24' className='inline pb-[3px]'/>
              </a>)}
              {behance && 
                (<a onClick={linkHandler} target="_blank" rel="noopener noreferrer" href={behance}
                className='solidshadow tracking-wider bg-white font-bold py-2 px-4 border-2 border-black flex-shrink-0
                  hover:bg-black hover:text-white'>
                BEHANCE <TbArrowUpRight size='24' className='inline pb-[3px]'/>
              </a>)}
            </motion.div>
            {thumbnail && <GatsbyImage className='mt-6 border-2 border-[#DDDDD2]' image={thumbnail}/>}
          </motion.div>
          {isViewed(slug) && (
            <motion.div layout 
              className={`col-span-2 px-6 ${isViewed(slug) && ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: {ease: 'easeInOut', duration: 0.7} }}
              exit={{ opacity: 0 }}>
                {renderRichText(content, richTextOptions)}
            </motion.div>
          )}
        </motion.li>
        )
        }
      </AnimateSharedLayout>
  )
}