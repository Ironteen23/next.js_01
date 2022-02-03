import Link from 'next/link';
import styles from '../../styles/Turfs.module.css'

export const getStaticProps= async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();  // u get array of data 

    return{
        props:{names: data}  // anything we write in props is acessible to us in the later function of the webpage
    }


}  // FETCHes THE JSON DATA BEFORE THE WEBSITE IS RENDERED


const Ninjas = ({names}) => {
    return ( 
        <div>
            <h1>ALL NINJAS</h1>
            {
                names.map(ninja =>
                    (
                        <Link href={'/ninjas/'+ ninja.id} key={ninja.id}>
                            <a className={styles.single}>
                                <h3>
                                    {ninja.name}   
                                </h3>                 
                            </a>

                        </Link>
                    ) )
            }
        </div>
     );
}

//here the .name in line 23 is basically the title by which json page is defined
 
export default Ninjas;