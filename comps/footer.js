import styles from '../styles/footer.module.css'


const Footer = () => {
    return ( 
        <footer class={styles.footer}>
            <h3 className={styles.whi}>OUR TEAM  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;TECH STACK</h3>
            <h3 className={styles.whi}>HEM MAHIMKAR BT20CSE174 &emsp;&emsp;&emsp;&emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; Next.js</h3>
            <h3 className={styles.whi}>KINSHU JAIN BT20CSE116 &emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; Netlify</h3>
    </footer>
     );
}
 
export default Footer;