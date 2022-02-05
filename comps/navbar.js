import Link from 'next/link'
import Image from 'next/image';

import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext)
  console.log(user)

    return ( 
        <nav>
        <div className="logo">
            <Image src="/TurFIT_Logo.png" width={100} height={90}/>
            
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Turfs</a></Link>
        <li onClick={login} className="btn">Login/Signup</li>
        <li onClick={logout} className="btn">Logout</li>

        </nav>
     );
}
 
