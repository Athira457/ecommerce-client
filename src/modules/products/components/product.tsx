"use client";
import axios  from 'axios';
import { useState, useEffect } from 'react';
import styles from './productView.module.css';
import Link from 'next/link';
import Image from 'next/image';
import sp2 from '@/themes/img/sp-2.svg';

interface Products {
   pid: string,
   name:string,
   rate:string,
};

export default function ProductView() {
    const [products, setproducts] = useState<Products | null>(null);
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    useEffect(() => {
        const fetchBooking = async () => {
          try {
            const response = await axios.get(`${serverUrl}/productShow`); 
            setproducts(response.data);
          } catch (error) {
            console.error('Error fetching booking:', error);
          }
        };
    
        fetchBooking();
      }, []);


  return (

    <div className={styles.movieContainer}>
        {response.data.map(product => (
            <div key={product._id} className={styles.movieItem}>
              <Link href={`/Users/components/aboutMovie/${product._id}`} passHref>
                <Image
                  src={sp2}
                  alt={product.name}
                  width={400}
                  height={500}
                />
              </Link>
              <p className={styles.status}>{product.name} ({product.rate})</p>
            </div>
          ))
        }
      </div>
  );
}
