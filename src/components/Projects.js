import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Projects({handleNav, toggleNav}) {
  
  const isOpen = toggleNav === "projects"
  const [activeProject, setActiveProject] = useState("")
  const isViewed = (slug) => (activeProject === slug)

  const viewProject = (slug) => {
    setActiveProject(slug)
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className='text-3xl mt-6 mb-4'>{children}</h2>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className='mb-4'>{children}</p>
      },
    },
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: {fields: order, order: DESC}) {
        edges {
          node {
            contentful_id
            desc {
              desc
            }
            name
            slug
            content {
              raw
            }
            order
            github
            liveurl
            behance
            thumb {
              gatsbyImageData(height: 1000)
            }
          }
        }
      }
    }
    `)

  const projectTitles = data.allContentfulProject.edges.map((edge, i) => {
    const thumbnail = getImage(edge.node.thumb)
    return  (
      <AnimateSharedLayout>
        {
        (!activeProject || isViewed(edge.node.slug))
        && 
        (
        <motion.li layout 
            onClick={() => viewProject(edge.node.slug)}
            key={i} id={edge.node.slug}
            className={`outline outline-2 outline-black bg-white 
            ${activeProject ? 
              'md:grid md:col-span-3 md:grid-cols-3' : 
              'hover:bg-slate-100 cursor-pointer'}`}>

          <motion.div layout className={`p-6`}>
            <motion.h2 layout className={`text-4xl font-bold`}>{edge.node.name}</motion.h2>
            <motion.p layout className='text-slate-500 mt-2'>{edge.node.desc.desc}</motion.p>
            <motion.div layout className='flex flex-wrap gap-6 mt-8 mb-4'>
              {edge.node.liveurl && 
                (<a target="_blank" rel="noopener noreferrer" href={edge.node.liveurl}
                className='solidshadow tracking-wider bg-white font-bold py-2 px-4 border-2 border-black flex-shrink-0
                  hover:bg-black hover:text-white'>
                LIVE ↗︎
              </a>)}
              {edge.node.github && 
                (<a target="_blank" rel="noopener noreferrer" href={edge.node.github}
                className='solidshadow tracking-wider bg-white font-bold py-2 px-4 border-2 border-black flex-shrink-0
                  hover:bg-black hover:text-white'>
                GITHUB ↗︎
              </a>)}
              {edge.node.behance && 
                (<a target="_blank" rel="noopener noreferrer" href={edge.node.behance}
                className='solidshadow tracking-wider bg-white font-bold py-2 px-4 border-2 border-black flex-shrink-0
                  hover:bg-black hover:text-white'>
                BEHANCE ↗︎
              </a>)}
            </motion.div>
            {thumbnail && <GatsbyImage className='mt-6 border-2 border-[#DDDDD2]' image={thumbnail}/>}
          </motion.div>
          {isViewed(edge.node.slug) && (
            <motion.div layout 
              className={`col-span-2 px-6 ${isViewed(edge.node.slug) && ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: {ease: 'easeInOut', duration: 0.7} }}
              exit={{ opacity: 0 }}>
                {renderRichText(edge.node.content, options)}
            </motion.div>
          )}
        </motion.li>
        )
        }
      </AnimateSharedLayout>
    )
})

  const containerVariants = {
    initial: {
      y: "100vh",
    },
    animate: { 
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
        initial="initial"
        animate="animate"
        exit="exit"
        className={`outline outline-2 outline-black fixed flex flex-col top-20 md:top-24 bottom-0 left-0 right-0 bg-white text-black
        min-h-[100vh-32] overflow-x-clip overflow-y-scroll md:left-[5vw] md:w-[90vw]`}>

      <div className='flex justify-between align-middle p-6 bg-yellow text-3xl md:text-5xl font-bold text-[#DDDDD3]'>
        {activeProject ?
          (<motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: {ease: 'easeInOut', duration: 0.3} }}
            exit={{ opacity: 0, x: 50 }}
            onClick={() => setActiveProject(null)} 
            className='cursor-pointer underline'>← GO BACK
          </motion.h2>)
          :
          (<h2>PROJECTS</h2>)
        }
        <div className=' my-auto text-2xl cursor-pointer font-bold flex-none
          hover:opacity-50'
          onClick={handleNav}>✕
        </div>
      </div>

      <ul className='grid grid-cols-1 md:grid-cols-3'>
        {projectTitles}
      </ul>

  </motion.div>
  )
}

//  * Map of all Contentful block types. Blocks contain inline or block nodes.

//  export enum BLOCKS {
//   DOCUMENT = 'document',
//   PARAGRAPH = 'paragraph',

//   HEADING_1 = 'heading-1',
//   HEADING_2 = 'heading-2',
//   HEADING_3 = 'heading-3',
//   HEADING_4 = 'heading-4',
//   HEADING_5 = 'heading-5',
//   HEADING_6 = 'heading-6',

//   OL_LIST = 'ordered-list',
//   UL_LIST = 'unordered-list',
//   LIST_ITEM = 'list-item',

//   HR = 'hr',
//   QUOTE = 'blockquote',

//   EMBEDDED_ENTRY = 'embedded-entry-block',
//   EMBEDDED_ASSET = 'embedded-asset-block',

//   TABLE = 'table',
//   TABLE_ROW = 'table-row',
//   TABLE_CELL = 'table-cell',
//   TABLE_HEADER_CELL = 'table-header-cell',
// }



//  * Map of all Contentful marks.

//  enum MARKS {
//   BOLD = 'bold',
//   ITALIC = 'italic',
//   UNDERLINE = 'underline',
//   CODE = 'code',
// }


//  * Map of all Contentful inline types. Inline contain inline or text nodes.

//  export enum INLINES {
//   HYPERLINK = 'hyperlink',
//   ENTRY_HYPERLINK = 'entry-hyperlink',
//   ASSET_HYPERLINK = 'asset-hyperlink',
//   EMBEDDED_ENTRY = 'embedded-entry-inline',
// }