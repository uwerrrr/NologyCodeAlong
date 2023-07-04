import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { createMessage } from '../../services/message-service';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const onFormSubmit = (value) => {
    createMessage(value).then((response) => {
      // save form data to API json data

      console.log("Form Submitted:", response);
      navigate("/thanks");
      // after submission -> go to thanks Page
    });
  };

  return (
    <main>
      <h2>Contact Page</h2>
      <ContactForm formSubmit={onFormSubmit} />
    </main>
  );
};

export default ContactPage;
