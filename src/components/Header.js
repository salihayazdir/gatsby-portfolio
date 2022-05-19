import React from 'react'

export default function Header(props) {
  return (
    <div className='flex align-middle mt-10'>
        
        <h1 className={`text-7xl leading-[0.6em] tracking-tight
        absolute md:top-40 md:text-8xl md:leading-[0.6em]
        ${props.isOpen &&
            'text-4xl md:text-5xl static md:top-8'} 
        ease-in-out duration-700 `}
            >salih<br/>ayazdır
        </h1>

        <button className='border border-[#F2FFE6] px-4 h-10 text-sm ml-auto'
            >Türkçe  🇹🇷
        </button>
    </div>
  )
}
