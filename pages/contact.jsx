import React, { useState } from 'react';
import Container from '@/components/Container';

const c = {
  headline: 'w-full',
  formWrapper: 'mt-10 w-full',
  formGroup: 'flex flex-col',
  form: 'flex flex-col gap-8',
  input: 'border-2 border-gray-700 dark:text-black dark:bg-white dark:border-gray-200 rounded h-8 w-full p-2',
  message: 'border-2 border-gray-700 dark:text-black dark:bg-white dark:border-gray-200 rounded h-40 w-full p-2',
  inputButton: 'mr-auto bg-gray-900 dark:bg-white dark:text-black text-white rounded w-40 h-10 font-bold cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-100 ',
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sending');

    const data = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((r) => {
      console.log('response recieved');
      if (r.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  };

  return (
    <Container>

      <h1 className={c.headline}>Contact</h1>

      <div className={c.formWrapper}>

        <form className={c.form}>
          <formGroup className={c.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              required
              className={c.input}
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </formGroup>
          <formGroup className={c.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              required
              className={c.input}
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </formGroup>
          <formGroup className={c.formGroup}>
            <label htmlFor="message">Message:</label>
            <input
              required
              className={c.message}
              type="text"
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </formGroup>
          <input
            className={c.inputButton}
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </form>

      </div>
    </Container>
  );
}
