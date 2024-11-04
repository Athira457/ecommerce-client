import styles from './productView.module.css';
import Link from 'next/link';
import Image from 'next/image';
import pf1 from '@/themes/img/pf-1.svg';
import sp2 from '@/themes/img/sp-2.svg';
import sp4 from '@/themes/img/sp-4.svg';

export default function ProductView() {
  return (

    <div className={styles.productView}>
        <div className={styles.detailsblock}>
            <Image src={pf1} alt="" width={100} height={100}/>
            <div className={styles.head1}>DAVIDOFF</div>
            <p className={styles.subhead1}>Cool Water Eau De Toilette for Men</p>
            <p className={styles.subhead1}>$ 40</p>
            <Link href="../cart/cart.html">
            <button className={styles.buybutton}>Add to Cart</button></Link>
        </div>
        <div className={styles.detailsblock}>
            <Image src={sp2} alt="" width={100} height={100}/>
            <div className={styles.head1}>LATAFFA</div>
            <p className={styles.subhead1}>Eau de Parfum</p>
            <p className={styles.subhead1}>$ 80</p>
            <Link href="../cart/cart.html">
            <button className={styles.buybutton}>Add to Cart</button></Link>
        </div>
        <div className={styles.detailsblock}>
            <Image src={sp4} alt="" width={100} height={100}/>
            <div className={styles.head1}>CALVIN KLEIN</div>
            <p className={styles.subhead1}>Cool Water Eau De Toilette for Men</p>
            <p className={styles.subhead1}>$ 50</p>
            <Link href="../cart/cart.html">
            <button className={styles.buybutton}>Add to Cart</button></Link>
        </div>
        <div className={styles.detailsblock}>
            <Image src={sp2} alt="" width={100} height={100}/>
            <div className={styles.head1}>LATAFFA</div>
            <p className={styles.subhead1}>Eau de Parfum</p>
            <p className={styles.subhead1}>$ 80</p>
            <Link href="../cart/cart.html">
            <button className={styles.buybutton}>Add to Cart</button></Link>
        </div>
    </div>
  );
}
