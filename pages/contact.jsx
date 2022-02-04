import React, { useState } from 'react';
import { ImCheckmark } from 'react-icons/im';
import Container from '@/components/Container';

const c = {
  headline: 'w-full font-bold',
  formWrapper: 'mt-10 w-full',
  formGroup: 'flex flex-col',
  form: 'flex flex-col gap-8',
  input: 'border-2 border-black dark:text-black dark:bg-white h-8 w-full p-2',
  message: 'border-2 border-gray-700 dark:text-black dark:bg-white w-full p-2',
  inputButton: 'bg-black dark:bg-white dark:text-black text-white w-40 h-10 font-medium cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-100 rounded',
  label: 'font-medium pb-1',
  buttonGroup: 'flex gap-4 items-center',
  checkmark: 'contents',
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      if (r.status === 200) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  };

  return (
    <Container
      title="Max Grzanna - Contact"
      description="Feel free to fill in the contact form in case you want to reach me."
    >

      <h1 className={c.headline}>Contact</h1>

      <div className={c.formWrapper}>

        <form className={c.form}>
          <fieldset className={c.formGroup}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="name" className={c.label}>Name:</label>
            <input
              required
              className={c.input}
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className={c.formGroup}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={c.label} htmlFor="email">Email:</label>
            <input
              required
              className={c.input}
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className={c.formGroup}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={c.label} htmlFor="message">Message:</label>
            <textarea
              required
              className={c.message}
              type="text"
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </fieldset>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <div className={c.buttonGroup}>
            <button
              className={c.inputButton}
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Send
            </button>
            {submitted ? (
              <div className={c.checkmark}>
                <ImCheckmark className="fill-green-700 relative left-2.5" />
                <p className="text-green-700">Success!</p>
              </div>
            ) : ('')}
          </div>
        </form>
      </div>
    </Container>
  );
}
