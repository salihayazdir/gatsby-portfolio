import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { send } from '@emailjs/browser'
import { TbArrowDown, TbLoader } from 'react-icons/tb';

export default function Form() {

    const [formData, setFormData] = useState({ username: '', email: '',message: '', })
    const [formState, setFormState] = useState({isOpen: false, isSent: false, isFailed: false, isLoading: false})

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
            response.status === 200 && setFormState({...formState, isOpen: false, isLoading: false, isSent: true})
          })
          .catch((err) => {
            console.log('FAIL', err)
            setFormState({ ...formState, isOpen: false, isLoading: false, isSent: true, isFailed: true })
          })

          setFormData({ username: '', email: '',message: '', })
          setFormState({ ...formState, isOpen: false, isLoading: true })
    }
        
    const fieldStyles = 'focus:bg-slate-100 focus:outline-0 px-6 py-4 mb-[-px] border-b-2 border-black'
    const containerVariants = {
      hidden: { y: -250, opacity: 1, },
      visible: { y: 0, opacity: 1, transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 } },
      exit: { opacity: 0, y: 50, transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.3 } }
    }
    
    return (
        <>
            <div onClick={() => setFormState({...formState, isOpen: true})}
            className={`z-20 flex px-6 py-4 text-2xl font-bold bg-slate-300 outline outline-2 outline-black ${!formState.isOpen && 'cursor-pointer hover:bg-slate-200'}`}>
                Leave a Message <TbArrowDown size='30' className='ml-2'/>
            </div>
            <AnimatePresence>
            {formState.isOpen && (
                <motion.form 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                name="contact" onSubmit={handleSubmit}
                className=' z-10 flex flex-col text-lg  bg-white'>
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

            {formState.isLoading && (
                <motion.div
                className='bg-yellow rounded-full h-4 w-4 mt-12 ml-12'
                animate={{ x: [-20, 20], y: [0, -30], 
                    transition: { 
                        x: { yoyo: Infinity, duration: 0.8, ease: 'easeInOut' },
                        y: { yoyo: Infinity, duration: 0.2, ease: [0.6, 0.01, -0.05, 0.95], } 
                    }}}
                    >
                </motion.div>
            )}

            <AnimatePresence> 
            {formState.isSent && (
                <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`px-6 py-4 text-left text-2xl outline outline-2 outline-black bg-green-500 text-white ${formState.isFailed && 'bg-red-500'}`}>
                    <div>{!formState.isFailed ? ('Message sent. I will get back to you soon.') : ('Failed to send :((')}</div>
                    <button className='underline font-bold mt-2 uppercase'
                    onClick={() => setFormState({...formState, isOpen: true, isSent: false, isFailed: false})}>
                        {!formState.isFailed ? 'Send Another' : 'Try Again'}
                    </button>
                </motion.div>
            )}
            </AnimatePresence>
        </>
  )
}