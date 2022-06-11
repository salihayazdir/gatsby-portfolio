import React, { useState } from 'react'
import Window from './Window'

export default function Contact() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormState(
      {...formState,
        [e.target.name]: e.target.value}
    )
  }

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit =  (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

  const contactInfo = [
    {text: "↗ hello@salihayazdir.com", link: "mailto:hello@salihayazdir.com"},
    {text: "↗︎ linkedin / salihayazdir", link: "https://linkedin.com/in/salihayazdir"},
    {text: "↗︎ behance / salihayazdir", link: "https://behance.net/salihayazdir"},
    {text: "↗︎ github / salihayazdir", link: "#"},
  ]

  return (
  <Window title='CONTACT'>
    <div className='flex flex-col md:flex-row outline outline-2 outline-black'>
      
      <div className='flex-[2] flex flex-col text-2xl outline outline-2 outline-black'>
        {contactInfo.map((item) => (
          <a  className='hover:bg-slate-100 px-6 py-8 mb-[-px] border-b-2 border-black last-of-type:border-0'
          href={item.link}
          >{item.text}
          </a>))}
      </div>

      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
            className='flex-[3]' onSubmit={handleSubmit} netlify>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor='name'>Name</label>
        <input
          id='name' type='text' name='name' onChange={handleChange} value={formState.name}
          placeholder='Name Placeholder'
        />
        <label htmlFor='name'>Email</label>
        <input
          id='email' type='text' name='email' onChange={handleChange} value={formState.email}
          placeholder='Email Placeholder'
        />
        <label htmlFor='name'>Message</label>
        <input
          id='message' type='text' name='message' onChange={handleChange} value={formState.message}
          placeholder='Message Placeholder'
        />
        <button type='submit'>submit</button>
      </form>
      
    </div>
  </Window>
  )
}