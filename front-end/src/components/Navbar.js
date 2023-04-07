import React from 'react'
import {Link} from 'react-router-dom';
import {useLogout} from '../hooks/useLogout';


export default function Navbar() {
  
  const { logout } = useLogout()
  const handelclick = () => {
    logout()
  }

  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>workout buddy</h1>
            </Link>
            <nav>
              <div>
                <button onClick={handelclick}>Log out</button>
              </div>
              <div>
                <Link to={'/login'}>Login</Link>
                <Link to={'/signup'}>Signup</Link>
              </div>
            </nav>
        </div>
    </header>
  )
}
