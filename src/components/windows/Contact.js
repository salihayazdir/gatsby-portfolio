import React, { useState } from 'react'
import Window from './Window'
import { motion, AnimatePresence } from 'framer-motion';
import { send } from '@emailjs/browser'
import { TbArrowUpRight, TbArrowDown } from 'react-icons/tb';

export default function Contact() {

  const [formData, setFormData] = useState({ username: '', email: '',message: '', })
  const [formState, setFormState] = useState({isOpen: false, isSent: false})

  const handleChange = (e) => {
    setFormData(
      {...formData,
        [e.target.name]: e.target.value}
    )
  }

  const handleSubmit =  (e) => {
    const { username, email, message } = formData
    e.preventDefault();

    send(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      process.env.GATSBY_EMAILJS_TEMPLATE_ID,
      { username, email, message },
      process.env.GATSBY_EMAILJS_PUBLIC_KEY,
     )
      .then((response) => {
        console.log('SUCCESS', response.status, response.text)
        response.status === 200 && setFormState({isOpen: false, isSent: true})
      })
      .catch((err) => {
        console.log('FAIL', err)
      })

      setFormData( { username: '', email: '',message: '', } )
  }
  
  const contactInfo = [
    {text: "hello@salihayazdir.com", link: "mailto:hello@salihayazdir.com"},
    {text: "linkedin / salihayazdir", link: "https://linkedin.com/in/salihayazdir"},
    {text: "behance / salihayazdir", link: "https://behance.net/salihayazdir"},
    {text: "github / salihayazdir", link: "#"},
  ]

  const fieldStyles = 'focus:bg-slate-100 focus:outline-0 px-6 py-4 mb-[-px] border-b-2 border-black'
  
  const variants = {
    hidden: { y: -50, opacity: 0, },
    visible: { y: 0, opacity: 1, transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.3 } }
  }

  return (
  <Window title='CONTACT'>
    <div className='flex flex-col md:flex-row outline outline-2 outline-black mb-10'>
      
      <div className='flex-[2] flex flex-col text-2xl outline outline-2 outline-black'>
        {contactInfo.map((item) => (
          <a  className='flex-1 flex align-middle hover:bg-slate-100 px-6 py-4 border-b-2 border-black last-of-type:border-0'
          href={item.link}
          >{item.text} <TbArrowUpRight size='30' className='ml-2'/>
          </a>))}
      
        <div className='flex-[3] flex flex-col justify-between outline outline-2 outline-black'>
          <div onClick={() => setFormState({...formState, isOpen: true})}
            className={`flex px-6 py-4 text-2xl font-bold bg-slate-300 outline outline-2 outline-black ${!formState.isOpen && 'cursor-pointer hover:bg-slate-200'}`}>
            Leave a Message <TbArrowDown size='30' className='ml-2'/>
          </div>
          <AnimatePresence>
          {formState.isOpen && (
          <motion.form 
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            name="contact" onSubmit={handleSubmit}
            className='flex flex-col text-lg outline outline-2 outline-black bg-white'>
              <input
                id='username' type='text' name='username' placeholder='Your Name' required
                onChange={handleChange} value={formData.username}
                className={`${fieldStyles}`}
              />
              <input
                id='email' type='email' name='email' placeholder='Your E-mail Adress' required
                onChange={handleChange} value={formData.email}
                className={`${fieldStyles}`}
              />
              <input
                id='message' type='text' name='message' placeholder='Your Message' required
                onChange={handleChange} value={formData.message}
                className={`${fieldStyles}`}
              />
              <button type='submit'
                className='px-6 py-4 text-left text-2xl font-bold outline outline-2 outline-black hover:bg-black hover:text-white'
                >SEND
              </button>
          </motion.form>
          )}
          </AnimatePresence>
          <AnimatePresence>
          {formState.isSent &&
              (<motion.div 
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className='px-6 py-4 text-left text-2xl outline outline-2 outline-black bg-green-500 text-white'>
                  <div>Message sent. I'll get back to you soon.</div>
                  <button className='underline'
                  onClick={() => setFormState({isOpen: true, isSent: false})}>
                    Send Another Message
                  </button>
              </motion.div>)}
            </AnimatePresence>
        </div>
      </div>
    </div>
  </Window>
  )
}