import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const router = useHistory();
    return (
        <div>
            <nav>
            <div className="" style={{paddingLeft: 150, paddingRight: 150}}>
                <a onClick={() => router.push('/')} class="brand-logo" style={{cursor: 'pointer'}}>Dashboard</a>
                <ul id="" class="right hide-on-med-and-down">
                <li><a onClick={() => router.push('/')}>Register</a></li>
                <li><a href="#">Login</a></li>
                <li><a onClick={() => router.push('/dashboard')}>Dashboard</a></li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
