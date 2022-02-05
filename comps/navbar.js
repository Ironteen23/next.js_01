import Link from 'next/link'
import Image from 'next/image';

import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)

    return ( 
        <nav>
         
        <div className="logo">
            <Image src="/TurFIT_Logo.png" width={100} height={90}/>
         
        </div>
        
        { authReady && ( 
          <ul>
        <Link href="/"><a>Home</a></Link>
        <a></a>
        
        <Link href="/about"><a>About</a></Link>
        <a></a>

        <Link href="/ninjas"><a>Turfs</a></Link>
        <a></a>
        <a></a>
        <a></a>

        {!user && <li onClick={login} className="btn">Login/Signup</li>}
        <a></a>
        {user && <li>{user.email}</li>}
        <a></a>

        {user && <li onClick={logout} className="btn">Logout</li>}

        <a></a>
        <a></a>
        </ul>
      )}
        </nav>
     );
}
 
