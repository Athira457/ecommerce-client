"use client";
import axios from 'axios';
import Image from 'next/image';
import styles from './signin.module.css';
import Link from 'next/link';
import cross from '@/themes/img/cross-ash.svg';
import eye from '@/themes/img/eye.svg';
import { useState } from 'react';

const Signin: React.FC = () => {
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

    return(
        <div className={styles.backgroundimage}>
        <form onSubmit={handleSubmit} className={styles.card}>
            <Image src={cross} alt="Close" className={styles.closeicon} width={40} height={40}/> 
            <h2 className={styles.heading}>Sign In</h2>
            <div className={styles.inputfeildwrapper}>

                <p className={styles.inname}>Email or Phone Number</p>
                <input type="text" 
                    placeholder="" 
                    className={styles.inputfield}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p className={styles.inname}>Password</p>
                <div className={styles.passwordfield}>
                    <input type="password" 
                        placeholder="" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputfield}
                    />

                    <Image src={eye} alt="Show Password" className={styles.eyeicon} width={40} height={40}/>
                </div>
                <Link href="../home/home.html">
                    <button className={styles.signupbutton}>Sign In</button>
                </Link>
                <p className={styles.signintext}>Already have an account? <Link href="/login" className={styles.signinlink}>Sign Up</Link></p>
            </div>

        </form>
    </div>
    );

};

export default Signin;