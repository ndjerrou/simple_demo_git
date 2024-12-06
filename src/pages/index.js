import Head from 'next/head';
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const [formData, setFormData] = useState({
    mail: '',
    password: '',
  });

  const handleChange = e => {
    const val = e.target.value;

    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: val,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <form>
        <div>
          <label>Mail : </label>
          <input
            type='mail'
            name='mail'
            value={formData.mail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button onSubmit={handleSubmit}>Envoyer</button>
      </form>
    </>
  );
}
