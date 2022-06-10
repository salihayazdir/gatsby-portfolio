import React from 'react'
import Window from './Window'

export default function Contact() {

  const contactInfo = [
    ["↗ hello@salihayazdir.com", "mailto:hello@salihayazdir.com"],
    ["↗︎ linkedin / salihayazdir", "https://linkedin.com/in/salihayazdir"],
    ["↗︎ behance / salihayazdir", "https://behance.net/salihayazdir"],
    ["↗︎ github / salihayazdir", "#"],
  ]

  return (
  <Window title='CONTACT'>
    <div className='flex flex-col text-3xl'>
      {contactInfo.map((item) => (
        <a  className='hover:bg-slate-100 px-6 py-8 mb-[-px] border-b-2 border-black'
        href={item[1]}
        >{item[0]}
        </a>))}
    </div>
  </Window>
  )
}