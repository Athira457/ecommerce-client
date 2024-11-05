
"use client";
import React, { useState } from 'react';
import axios from 'axios';
import styles from './signup.module.css';
import Link from 'next/link';
import Image from 'next/image';
import cross from '@/themes/img/cross-ash.svg';
import eye from '@/themes/img/eye.svg';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        const response = await axios.post('http://localhost:4000/signup', { name, email, password });
        if (response.data.success) {
          alert("successfully registered"); 
        } else {
          alert('Sign-up failed');
        }
      } catch (error) {
          alert('Error signing up, please try again.');
          console.error(`Error in signup `,error)
      }
    };

  return (
    <div className={styles.backgroundImage}>
        <form onSubmit={handleSubmit} className={styles.card}>
        <Image src={cross} alt="Close" className={styles.closeIcon} width={10} height={10}/>
        <h2 className={styles.heading}>Sign Up</h2>
        <div className={styles.inputfeildwrapper}>
            <p className={styles.inname}>Name</p>
            <input 
              type="text"
              placeholder="" 
              className={styles.inputfield}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className={styles.inname}>Email or Phone Number</p>
            <input
              type="text" 
              placeholder="" 
              className={styles.inputfield}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className={styles.inname}>Password</p>
            <div className={styles.passwordField}>
                <input 
                  type="password" 
                  placeholder="" 
                  className={styles.inputfield}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Image src={eye} alt="Show Password" className={styles.eyeIcon} width={40} height={40}/> 
            </div>
   
            <button type="submit" className={styles.signupbutton}>Sign Up</button>
            <p className={styles.signintext}>Already have an account? <Link href="signin"
                    className={styles.signinlink}>Sign In</Link></p>
        </div>

        </form>
    </div>
  );
};

export default Signup;
