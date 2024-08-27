import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import '../EmailComponent/Email.css'; // Assuming you have a separate CSS file for custom styles

export const ContactUs = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const clearForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rw0g85o', 'template_g62fd1k', form.current, '2c65Dtvo7cdQnOjEX')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessageStatus('Message sent successfully!');
          clearForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="container mt-5 pt-lg-5 mb-5">
      <div className='text-center pt-lg-5 mb-5'>
<h2>Get in touch</h2>
<h1>Contact Me</h1>
      </div>
      <div className="row justify-content-around Email">
        <div className="col-md-4 col-sm-10 mb-sm-3 d-flex flex-column justify-content-start align-items-center   ">
          <div className="row w-100  myEmail  justify-content-center text-center   ">
            <div className="col-12 text-center icon">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </div>
            <div className="col-md-12  text-center  ">
              <h2>Email</h2>
              <p >Mahmoudsalah01207@gmail.com</p>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" >
                Send a message
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-10">
          <form ref={form} onSubmit={sendEmail}>
            {messageStatus && <p className={messageStatus.includes('successfully') ? 'success' : 'error'}>{messageStatus}</p>}
            <input

             type="text"
            className="form-control pb-3"
            id="user_name"
            name="user_name"
            placeholder="name"
            value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
             className="form-control mt-4 pb-3"
             id="user_email"
             placeholder="email@gmail.com"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
              <textarea 
              className="form-control mt-4"
               id="exampleFormControlTextarea1" 
               rows="3"
               placeholder="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
               ></textarea>

            
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};
