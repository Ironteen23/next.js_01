import Head from 'next/head'
import styles from '../styles/about.module.css'


const About = () => {
    return ( 
        <>
     <Head>
       <title>TurFit | About</title>
       <meta name="keywords" content="ninjas"/>
     </Head>
        <div>
            <center ><h1 className={styles.tt}>ABOUT US </h1>
          <br></br>
            

            <p className={styles.ba}>IN THIS PROJECT WE HAVE USED Next.js </p>
            <p className={styles.ba}><b>WE HAVE IMPLEMENT GENERAL CSS ALONG WITH JS </b></p>
            <p className={styles.ba}>ALSO THE PAGE OF EACH TRAINER IS NOT IMPLEMENTED MANUALLY BUT IT HAS BEEN DONE BY FETCHING THE DATA FROM A STATIC JSON API</p>
            <p className={styles.ba}><b>THE LOGIN SINGUP SYSTEM HAS BEEN DONE USING NEXT.JS AND NETLIFY FUNCTIONS</b> </p>
            <p className={styles.ba}>WE CAN SEE THE USER DATA THROUGH NETLIFY </p>

            <p className={styles.ba}><b>WE HAVE FOCUSED MORE ON LEARNING NEW LANGUAGE AND FUNCTIONS </b></p>
            </center>
          <br></br>
          <br></br>
            

            <h2> &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;   HEM MAHIMKAR    &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; &emsp; &emsp; KINSHU JAIN</h2>                                                                         
            <h2> &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; BT20CSE174  &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp;  BT20CSE116</h2>
          <br></br>
          <br></br>



        </div>
        </>
     );
}
 
export default About;