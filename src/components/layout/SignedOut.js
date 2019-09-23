import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOut = () => {
    return (
        <ul className="right">
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOut