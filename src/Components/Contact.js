import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const userEmail = e.target.querySelector('input[type="text"]').value;
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
          console.log(result.text);
          alert('Your message has been sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('There was an error sending your message. Please try again later.');
        });
    };
      return ( <div className="contact-page-wrapper">
    <h1 className="primary-heading">Have Questions?</h1>
    <h1 className="primary-heading">Let's Chat!</h1>
    <div className="contact-form-container">
    <input type="text" placeholder="youremail@email.com"/>
    <form onSubmit={handleSubmit}>
    <button className="secondary-button">Submit</button> 
    </form>
       </div>     
    </div>
);
};

export default Contact;