import Link from 'next/Link';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Homepage(){
    return <div>
        <h3 style={{fontFamily:"Calibri", fontWeight:"bold"}}>This is the Hompage</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h3>
        Anonymous form
    </h3>
    <Link>
        <a>Navigate to {SignIn}</a>
    </Link> 
        <a>Navigate to {SignUp}</a>
    <Link>
        Sign Up
    </Link>
    </div>
}