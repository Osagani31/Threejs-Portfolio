import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the destination email to the form data
    const formData = new FormData(ref.current);
    formData.append('to_email', EMAILJS_CONFIG.TO_EMAIL);

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        ref.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSuccess(true);
          ref.current.reset(); // Clear the form
        },
        (error) => {
          console.log('Email sending failed:', error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Get In Touch</Title>
            <Input placeholder="Your Name" name="from_name" required />
            <Input placeholder="Your Email" name="from_email" type="email" required />
            <TextArea
              placeholder="Your Message"
              name="message"
              rows={10}
              required
            />
            <input type="hidden" name="to_email" value={EMAILJS_CONFIG.TO_EMAIL} />
            <Button type="submit">Send Message</Button>
            {success === true && (
              <div style={{color: '#4CAF50', marginTop: '10px'}}>
                ✓ Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {success === false && (
              <div style={{color: '#f44336', marginTop: '10px'}}>
                ✗ Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;