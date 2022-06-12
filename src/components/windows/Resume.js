import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Window from './Window'
import { TbArrowDown } from 'react-icons/tb';

export default function Resume() {

  return (
    <Window title='RESUME'>
        <a  href="#"
            className='text-xl md:text-3xl px-6 py-4 hover:underline mb-[-px] border-b-2 border-black bg-slate-100 hover:bg-slate-200'
          ><TbArrowDown size='40' className='inline pb-[6px] mr-2'/>Download PDF
        </a>
        <div>
          <StaticImage src="../../assets/cv1.jpg" alt="cv1"/>
          <StaticImage src="../../assets/cv2.jpg" alt="cv2"/>
        </div>
    </Window>
    )
}