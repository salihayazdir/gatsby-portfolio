import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Window from '../Window'
import {richTextOptions} from './richTextOptions'
import Project from './Project'

export default function Projects() {

  const [activeProject, setActiveProject] = useState("")

  const viewProject = (slug) => {
    setActiveProject(slug)
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

  const projectsGrid = data.allContentfulProject.edges.map((edge, i) => {
    const thumbnail = getImage(edge.node.thumb)
    return  (
      <Project 
        viewProject={viewProject}
        slug={edge.node.slug}
        i={i}
        activeProject={activeProject}
        name={edge.node.name}
        desc={edge.node.desc.desc}
        liveurl={edge.node.liveurl}
        github={edge.node.github}
        behance={edge.node.behance}
        thumbnail={thumbnail}
        content={edge.node.content}
      />
    )
})

  return (
    <Window title={
        activeProject ?
        (<motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: {ease: 'easeInOut', duration: 0.3} }}
          exit={{ opacity: 0, x: 50 }}
          onClick={() => setActiveProject(null)} 
          className='cursor-pointer underline'>← GO BACK
        </motion.h2>)
        :
        (<h2>PROJECTS</h2>)
      }>
      <ul className='grid grid-cols-1 md:grid-cols-3'>
        {projectsGrid}
      </ul>
    </Window>
  )
}