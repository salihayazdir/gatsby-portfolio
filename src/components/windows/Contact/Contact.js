import React from 'react'
import Window from '../Window'
import { TbArrowUpRight } from 'react-icons/tb';
import Form from './Form';

export default function Contact() {

  const contactInfo = [
    {text: "hello@salihayazdir.com", link: "mailto:hello@salihayazdir.com"},
    {text: "linkedin / salihayazdir", link: "https://linkedin.com/in/salihayazdir"},
    {text: "behance / salihayazdir", link: "https://behance.net/salihayazdir"},
    {text: "github / salihayazdir", link: "#"},
  ]

  const contactInfoElements = contactInfo.map((item, i) => (
    <a  className='flex-1 flex align-middle hover:bg-slate-100 px-6 py-4 border-b-2 border-black last-of-type:border-0'
    href={item.link} key={i}
    >{item.text} <TbArrowUpRight size='30' className='ml-2'/>
    </a>))

  return (
    <Window title='CONTACT'>
      <div className='outline outline-2 outline-black mb-10'>
        <div className='flex flex-col text-2xl outline outline-2 outline-black'>
          {contactInfoElements}
          <div className='flex flex-col outline outline-2 outline-black'>
            <Form/>
          </div>
        </div>
      </div>
    </Window>
  )
}