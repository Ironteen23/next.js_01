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
    <h1 className={styles.title}>TURFIT</h1>
      
     <Image src="/fit.png" width={400} height={400}/>
     <Image src="/gym.jfif" width={420} height={400}/>
     <Image src="/football_kick.jfif" width={400} height={400}/>

      <center>
      <p className={styles.text}>NEED A TRAINER FOR GYM</p>
      <p className={styles.text}>WORRY NOT WE ARE HERE TO HELP YOU OUT</p>
      </center>
      <Link href="/ninjas"><a className={styles.btn}>SEE TRAINERS LIST</a></Link>
    
    </div>
    </>
  )
}
