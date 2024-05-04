import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { Message } from '@mui/icons-material';

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send('service_enzumzi', 'template_6biws5y', {
      from_name: formData.contact,
      to_name: 'gisMapstack@gmail.com',
      subject: 'Project Proposal',
      name: formData.name,
      company: formData.company,
      contact: formData.contact,
      message: formData.projectDetails
    }, '6WU3e0LOEqPrAw7DL')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
        onClose(); // Close the popup form
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Email sending failed. Please try again later.');
      });
  };  

  return (
    <div className="popup-container">
      <form onSubmit={handleSubmit} className="popup-form">
        {/* Your form fields */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <textarea
          name="projectDetails"
          placeholder="Project Details"
          value={formData.projectDetails}
          onChange={handleChange}
        />
        <button type="submit" className="primary-button">Submit</button>
      </form>
      <div className="popup-close" onClick={onClose}>
        <FaWindowClose /> {/* Close window icon */}
      </div>
    </div>
  );
};

export default PopupForm;
