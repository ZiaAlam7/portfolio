import React, { useEffect, useState } from 'react'
import './Contact.css'

const Contact = ({ scrollPosition }) => {


  const [animation, setAnimation] = useState('none');


  const handleDownload = () => {
    const imageUrl = 'http://localhost:5173/src/assets/BusinessCard.png';

    const link = document.createElement('a');

    link.href = imageUrl;
    link.download = 'Zia-Alam-Business-Card.jpg';

    link.click();
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      setStatus('Message sent successfully!');
      setTimeout(() => {
       
      }, 2000);
    } else {
      setStatus('Error sending message');
      setTimeout(() => {
        setStatus('');
      }, 2000);
    }
  };



  useEffect(() => {
    scrollPosition > 2220 ? setAnimation('card_move 2s forwards') : null;
  }, [scrollPosition]);


  return (
    <div className="section contact" id='contact'>
      <div className="container">
        <div className='business_card' style={{ 'animation': animation }}></div>
        <div className="contact_form">

          <form onSubmit={handleSubmit} autoComplete="on">

            <p>Get in touch</p>

            <div className="form_component">
              <label htmlFor='name_input'>NAME</label>
              <input type="text"
              id='name_input'
                placeholder='Please Enter Your Name'
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="given-name"
                required />
            </div>

            <div className="form_component">
              <label htmlFor='email_input'>EMAIL</label>
              <input type="email"
              id='email_input'
                placeholder='Please Enter Your Email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required />
            </div>

            <div className="form_component">
              <label htmlFor='message_input'>MESSAGE</label>
              <textarea
                name="message"
                id='message_input'
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Write Your Message...'></textarea>
            </div>

            <div className="form_btn">
              <button type='submit'>SEND MESSAGE</button>
              <button onClick={handleDownload}>Download My Business Card</button>
            </div>
          </form>
          {status && <p className='email_status'>{status}</p>}
        </div>
      </div>
    </div>
  )
}

export default Contact