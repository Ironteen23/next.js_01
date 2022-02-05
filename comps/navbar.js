import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
        <div className="logo">
            <Image src="/TurFIT_Logo.png" width={100} height={90}/>
            
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Turfs</a></Link>
        </nav>
     );
}
 
export default Navbar;