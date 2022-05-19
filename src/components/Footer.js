import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between align-bottom w-full border-t border-stone-500 '>
      <p className='text-sm text-stone-500 my-4'>Salih Ayazdır<br/>2022</p>
      <p className='text-sm text-stone-500 text-right my-4'>
        Built with: React.js,<br/>Gatsby, GraphQL, Contentful and Netlify</p>
    </div>
  )
}
