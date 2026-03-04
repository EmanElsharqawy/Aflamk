import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

import "../App.css";

const Contact = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ao873bn",
        "template_b7q6o67",
        { title, name, email, message },
        "2O1rNi8CKB1BEs55T"
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setStatusType('success');
          setTitle('');
          setName('');
          setEmail('');
          setMessage('');

          setTimeout(() => {
            setStatusMessage('');
            setStatusType('');
          }, 2000);
        },
        (error) => {
          setStatusMessage('Failed to send email');
          setStatusType('danger');

          setTimeout(() => {
            setStatusMessage('');
            setStatusType('');
          }, 2000);

          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <>
   
      <div className="text-center my-4">
             

        <h2 className="text-info">Contact with the website developer</h2>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <Card
          style={{ width: '35rem', border: '5px solid #62959dff' }}
          className="bg-dark text-white-50 m-4 p-4"
        >
          
          {statusMessage && (
            <Alert variant={statusType} className="text-center">
              {statusMessage}
            </Alert>
          )}

          <Form onSubmit={sendEmail}>
           

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ background: '#212529', border: '5px solid #62959dff', color: '#fff' }}
                placeholder="Type here"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ background: '#212529', border: '5px solid #62959dff', color: '#fff' }}
                placeholder="Type here"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                style={{ background: '#212529', border: '5px solid #62959dff', color: '#afaeaeff' }}
                placeholder="Type your message"
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center mt-4">
              <Button variant="outline-info" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
        

      </div>
      
    </>
  );
};

export default Contact;