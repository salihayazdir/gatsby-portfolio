import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Projects({handleProjects, isOpen}) {

  const data = useStaticQuery(graphql`
  query {
    allContentfulProject(
    sort: {
      fields: contentfulid,
      order: ASC
    }
    ) {
      edges {
        node {
          name
          desc {
            desc
          }
          contentfulid
        }
      }
    }
  }
  `)

const projectTitles = data.allContentfulProject.edges.map((edge) => {
  return  <h2 className='text-3xl font-bold'>
      {edge.node.name}</h2>
  }
  )


return (
<div className={`flex flex-col p-6 top-32 bottom-0 left-6 right-6 fixed bg-[#eeeeee] text-black
     min-h-[100vh-32] overflow-x-clip overflow-y-scroll
    md:left-[5vw] md:w-[90vw]
    ${isOpen ? 'translate-y-0' : 'translate-y-[120%]'}
    ease-in-out duration-700`}>
  
  <div className='flex justify-between'>
    <div className='text-3xl md:text-4xl font-bold'>← <u>Projects</u></div>  
    <div className='sticky ml-auto top-0 h-10 text-3xl cursor-pointer font-bold opacity-80
    hover:opacity-100 text-rose-500 md:text-4xl'
    onClick={handleProjects}>✕</div>
  </div>

  <div className='my-20'>
    <span>Projects list</span>
    {projectTitles}
  </div>

  <div>project details</div>

    {/* background */}
    {/* <div className='-z-10'>
        <div className="egg1 opacity-40"></div>
        <div className="egg2 opacity-50"></div>
      </div> */}
    {/* background */}
</div>
  )
}
