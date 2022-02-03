import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
     <Head>
       <title>TurFit | Home</title>
       <meta name="keywords" content="ninjas"/>
     </Head>
    <div>

      <h1 className={styles.title}>HOMEPAGE</h1>

      <p className={styles.text}>YO I LIKE ANIME OREWA HEM</p>
      <p className={styles.text}>YO I LIKE ANIME OREWA HEM</p>
      <Link href="/ninjas"><a className={styles.btn}>SEE Turf List</a></Link>
        
    </div>
    </>
  )
}
